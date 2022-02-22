
import { _decorator, Component, Node, Prefab, resources, instantiate, input, Input, EventTouch, Graphics, Camera, Vec3, Vec2, RigidBody2D, ERigidBody2DType } from 'cc';
import { AudioController } from './AudioController';
import { LevelController } from './LevelController';
import { WinUI } from './WinUI';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameController
 * DateTime = Sat Feb 19 2022 21:22:03 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = GameController.ts
 * FileBasenameNoExtension = GameController
 * URL = db://assets/scripts/GameController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('GameController')
export class GameController extends Component {
    private gameLevel: number = 1;
    private currentLevelNode: Node | null = null;
    private bird: Node | null = null;
    private birdPrefab: Prefab | null = null;
    @property(Node)
    private ui_draw: Node | null = null;
    private graphic: Graphics | null = null;
    @property(Camera)
    private camera: Camera | null = null;
    private birdPosition: Vec3 | null = new Vec3(-450, -100, 0);
    //target.x = -450+640, target.y = -100+360
    private firstPoint: Vec3 = new Vec3(190, 260)
    private pullVector: Vec3 | null = null;
    //
    private winUIPrefab: Prefab | null = null;
    //
    start() {
        // [3]
        this.graphic = this.ui_draw.getComponent(Graphics);
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        //asyn loading -> 
        this.setUpLevel();
        //
        //
    }
    //
    private onTouchStart(event: EventTouch) {
    }
    private onTouchMove(event: EventTouch) {
        this.graphic.clear();
        // this.pullVector = event.getLocation().subtract(new Vec2(this.bird.position.x,this.bird.position.y));
        //diem xuat phat.
        this.graphic.moveTo(this.firstPoint.x, this.firstPoint.y);
        //let worldPos = getLocation().subtract()
        //ham doi tu vi tri camera sang vi tri that tren man hinh
        let lastPoint = this.camera.screenToWorld(new Vec3(event.getLocation().x, event.getLocation().y, 0));
        //diem cuoi
        this.graphic.lineTo(lastPoint.x, lastPoint.y);
        this.graphic.stroke();
        //pull vector
        this.pullVector = lastPoint.subtract(this.firstPoint);
    }
    private onTouchEnd(event: EventTouch) {
        this.graphic.clear();
        //release
        if (this.pullVector && this.bird) {
            //bird
            let birdRiggid: RigidBody2D = this.bird.getChildByName('bird').getComponent(RigidBody2D)
            birdRiggid.type = ERigidBody2DType.Dynamic
            setTimeout(() => {
                //shoot sound
                AudioController.instance.playSound(2);
                //
                birdRiggid.applyForce(new Vec2(this.pullVector.x, this.pullVector.y).multiply(new Vec2(-20, -20)), Vec2.ZERO, true);
            }, 100);

        }
    }
    //
    private setUpLevel() {
        let levelPathStr = 'gamelevel/Level' + this.gameLevel;
        this.loadPrefab(levelPathStr, (prefab: Prefab) => {
            this.currentLevelNode = instantiate(prefab);
            this.currentLevelNode.getComponent(LevelController).setUp(() => {
                //win game callback
                console.log('Win Game');
                //show win UI
                setTimeout(() => {
                    this.showWinUI();
                }, 1000);
            })
            this.node.addChild(this.currentLevelNode);
        })
        //creating bird
        const createBird = (prefab: Prefab) => {
            this.bird = instantiate(prefab);
            this.bird.setPosition(this.birdPosition);
            this.node.addChild(this.bird);
        }
        if (this.birdPrefab == null) {
            this.loadPrefab('bird/bird1', (prefab: Prefab) => {
                this.birdPrefab = prefab;
                createBird(prefab);
            })
        } else {
            createBird(this.birdPrefab);
        }

    }
    private showWinUI() {
        //
        AudioController.instance.playSound(1);
        //1. load prefab win ui
        const createUI = (prefab: Prefab) => {
            let winUI = instantiate(prefab);
            winUI.getComponent(WinUI).setUp(() => {
                this.nextLevel();
            })
            this.node.addChild(winUI);
        }
        if (this.winUIPrefab == null) {
            this.loadPrefab('ui/winUI', (prefab: Prefab) => {
                // console.log(this.name,'Load Win UI')
                this.winUIPrefab = prefab;
                createUI(prefab);
            })
        } else {
            createUI(this.winUIPrefab);
        }

        //2. initialization

        //3. callback!
    }
    private nextLevel() {
        this.currentLevelNode.destroy();
        this.currentLevelNode = null;
        //
        this.bird.destroy();
        this.bird = null;
        this.gameLevel++;
        setTimeout(() => {
            this.setUpLevel();
        }, 1000);
    }
    private loadPrefab(path: string, callBack: CallableFunction) {
        resources.load(path, (error, prefab: Prefab) => {
            if (callBack) {
                callBack(prefab);
            }
        })
    }
    public winGame() {
        console.log('Win game....');
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
