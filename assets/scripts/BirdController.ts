
import { _decorator, Component, Node, RigidBody2D, ERigidBody2DType, input, Input, EventTouch, Vec2, Graphics } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BirdController
 * DateTime = Sat Feb 19 2022 21:10:16 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = BirdController.ts
 * FileBasenameNoExtension = BirdController
 * URL = db://assets/scripts/BirdController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('BirdController')
export class BirdController extends Component {

    @property(Node)
    private bird:Node | null = null;
    start () {
        // [3]

    }
    private onTouchStart(event:EventTouch) {

    }
    private onTouchMove(event:EventTouch){
        // this.pullVector = event.getLocation().subtract(new Vec2(this.bird.position.x,this.bird.position.y));
        // this.graphic.moveTo(0,0);
        // //let worldPos = getLocation().subtract()
        // this.graphic.lineTo(event.getLocation().x,event.getLocation().y);
        // this.graphic.stroke();
    }
    private onTouchEnd(event:EventTouch){
        this.releaseBird();
    }
    private releaseBird(){
        // if(this.isRelease) 
        // return;
        // this.isRelease = true;
        // let birdRiggid:RigidBody2D = this.bird.getComponent(RigidBody2D);
        // birdRiggid.type =ERigidBody2DType.Dynamic
        // setTimeout(() => {
        //     console.log('vec',this.pullVector)
        //     birdRiggid.applyForce(this.pullVector.multiply(new Vec2(5,5)),Vec2.ZERO,true);
        // }, 100);
 
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
