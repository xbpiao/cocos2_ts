/*
 * @Description: 
 * @Author: xbpiao
 * @Github: https://github.com/xbpiao/
 * @Date: 2019-01-31 10:58:06
 * @LastEditors: xbpiao
 * @LastEditTime: 2019-02-14 17:16:01
 */

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class MyClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    // constructor() {
    //     super();
    //     console.log('constructor MyClass');
    // }

    start() {
        console.log('MyClass.start');
    }

    test() {
        console.log('MyClass.test');
    }

    public buttonBackClick(event: cc.Event.EventTouch, eventData: any) {
        // 返回helloworld
        console.log('buttonBackClick test');
        if (this.label) {
            this.label.string = '[界面二]';
        }
        cc.director.loadScene('helloworld', () => {
            this.destroy();
        });
    }
    protected onDestroy(): void {
        console.log('MyClass.onDestroy');
    }
    // update (dt) {}
}
