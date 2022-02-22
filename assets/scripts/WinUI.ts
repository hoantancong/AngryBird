
import { _decorator, Component, Node } from 'cc';
import { AudioController } from './AudioController';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = WinUI
 * DateTime = Tue Feb 22 2022 21:55:37 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = WinUI.ts
 * FileBasenameNoExtension = WinUI
 * URL = db://assets/scripts/WinUI.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('WinUI')
export class WinUI extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    private nextCallBack:CallableFunction | null = null;
    start () {
        // [3]

    }
    setUp(nextCallBack:CallableFunction){
        this.nextCallBack = nextCallBack;
    }
    onNextLevel(){
        //
        AudioController.instance.playSound(0);
        this.node.destroy();
        //
        this.nextCallBack();
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
