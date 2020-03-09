/*
 * @Description: 
 * @Author: xbpiao
 * @Github: https://github.com/xbpiao/
 * @Date: 2019-01-31 10:58:06
 * @LastEditors: xbpiao
 * @LastEditTime: 2019-01-31 10:58:06
 */
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class MyLine extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        console.log('MyLine.onLoad');
        cc.view.setResizeCallback(() => {
            console.log('MyLine.setResizeCallback ');
            // this._drawRect();
            this._drawRect212();
        });

        this._drawRect212();
    }

    public start() {
        console.log('MyLine.start');
        var v: cc.Vec2 = this.node.getPosition();
        console.log('x=' + v.x + '  y=' + v.y);
    }

    public onRestore() {
        // 
        console.log('MyLine.onRestore');
    }

    public onDestroy() {
        console.log('MyLine.onDestroy');
    }

    private _drawRect212() {
        // 2.1.1之前的版本是正常的绘制（屏幕四边的线，绘制坐标原点在屏中心位置）
        // 2.1.2之后坐标就不对了（绘制的坐标原点在左下角了）
        var g = this.getComponent(cc.Graphics);
        g.clear();
        g.lineWidth = 1;
        g.strokeColor.fromHEX('#ff0000');
        g.fillColor.fromHEX('#ff0000');
        g.moveTo(0, 0);
        g.lineTo(100, 0);
        g.stroke();
        // g.fill();
        g.strokeColor.fromHEX('#00ff00');
        g.fillColor.fromHEX('#00ff00');
        g.moveTo(0, 0);
        g.lineTo(0, 100);
        g.stroke();
        // g.fill();

        // let s = cc.view.getFrameSize();
        // let s = cc.view.getCanvasSize();
        let s = cc.view.getVisibleSize();
        g.strokeColor.fromHEX('#ff00ff');
        g.moveTo(-s.width / 2, s.height / 2 - 1);
        g.lineTo(s.width / 2, s.height / 2 - 1);
        g.stroke();
        g.moveTo(-s.width / 2, -(s.height / 2 - 1));
        g.lineTo(s.width / 2, -(s.height / 2 - 1));
        g.stroke();

        g.moveTo(-(s.width / 2 - 1), -(s.height / 2));
        g.lineTo(-(s.width / 2 - 1), (s.height / 2));
        g.stroke();
        g.moveTo((s.width / 2 - 1), -(s.height / 2));
        g.lineTo((s.width / 2 - 1), (s.height / 2));
        g.stroke();
    }

    private _drawRect() {
        // 2.1.1之前的版本是正常的绘制（屏幕四边的线，绘制坐标原点在屏中心位置）
        // 2.1.2之后坐标就不对了（绘制的坐标原点在左下角了）
        var g = this.getComponent(cc.Graphics);
        g.clear();
        g.lineWidth = 1;
        g.strokeColor.fromHEX('#ff0000');
        g.fillColor.fromHEX('#ff0000');
        g.moveTo(0, 0);
        g.lineTo(100, 0);
        g.stroke();
        // g.fill();
        g.strokeColor.fromHEX('#00ff00');
        g.fillColor.fromHEX('#00ff00');
        g.moveTo(0, 0);
        g.lineTo(0, 100);
        g.stroke();
        // g.fill();

        // let s = cc.view.getFrameSize();
        // let s = cc.view.getCanvasSize();
        let s = cc.view.getVisibleSize();
        g.strokeColor.fromHEX('#ff00ff');
        g.moveTo(1, 0);
        g.lineTo(1, s.height - 1);
        g.stroke();
        
        g.moveTo(1, s.height - 1);
        g.lineTo(s.width, s.height - 1);
        g.stroke();
        
        g.moveTo(s.width, s.height - 1);
        g.lineTo(s.width, 0);
        g.stroke();
        
        g.moveTo(s.width, 0);
        g.lineTo(0, 0);
        g.stroke();
    }

    // start () {
    // }

    // update (dt) {}
}
