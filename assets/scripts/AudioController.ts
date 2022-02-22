
import { _decorator, Component, AudioClip, game, audio, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = AudioController
 * DateTime = Tue Feb 22 2022 22:26:17 GMT+0700 (Indochina Time)
 * Author = hoantancong
 * FileBasename = AudioController.ts
 * FileBasenameNoExtension = AudioController
 * URL = db://assets/scripts/AudioController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('AudioController')
export class AudioController extends Component {
    public static instance: AudioController | null = null;
    @property(AudioClip)
    private gameAudios: AudioClip[] = [];
    @property(AudioSource)
    audioSource:AudioSource | null = null;
    start () {
        // [3]
        if(AudioController.instance == null){
            //
            game.addPersistRootNode(this.node);
            AudioController.instance = this;
        }
    }
    
    playSound(index:number) {
        //check xem user co bat audio on hay khong?
        this.audioSource?.playOneShot(this.gameAudios[index],1.0);
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
