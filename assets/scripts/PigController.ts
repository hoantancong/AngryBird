
import { _decorator, Component, Node, Collider2D, IPhysics2DContact, Contact2DType } from 'cc';
import { GameController } from './GameController';
import { LevelController } from './LevelController';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PigController
 * DateTime = Mon Feb 21 2022 23:09:15 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = PigController.ts
 * FileBasenameNoExtension = PigController
 * URL = db://assets/scripts/PigController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PigController')
export class PigController extends Component {
    private isDie:boolean = false;
    start () {
        // [3]
 
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        if(this.isDie) return;
        if(otherCollider.node.name=="ground"||otherCollider.node.name.includes('bird')){
            //game over
            //c1
            //let canvasNode  = this.node.getParent().getParent();
             //canvasNode.getComponent(GameController).winGame();
             this.isDie=true;
             let level = this.node.getParent();
             level.getComponent(LevelController).pigDie();

        }
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
