
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LevelController
 * DateTime = Mon Feb 21 2022 23:36:22 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = LevelController.ts
 * FileBasenameNoExtension = LevelController
 * URL = db://assets/scripts/LevelController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LevelController')
export class LevelController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    private winCallBack:CallableFunction | null = null;
    start () {
        // [3]
    }
    setUp(callCallback:CallableFunction){
        this.winCallBack =callCallback;
    }
    public pigDie(){
        //win callback
        this.winCallBack();
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
