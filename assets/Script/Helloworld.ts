/*
 * @Description: 
 * @Author: xbpiao
 * @Github: https://github.com/xbpiao/
 * @Date: 2019-01-31 10:58:06
 * @LastEditors  : xbpiao
 * @LastEditTime : 2020-02-13 13:13:09
 */

const { ccclass, property } = cc._decorator; // 从 cc._decorator 命名空间中引入 ccclass 和 property 两个装饰器
import MyClass from './MyClass';

@ccclass // 使用装饰器声明 CCClass
export default class Helloworld extends cc.Component { // ES6 Class 声明语法，继承 cc.Component

    @property({
        type: cc.Label,
        displayName: 'label',
        tooltip: '我去这功能可有意思了！'
    }) // 使用 property 装饰器声明属性，括号里是属性类型，装饰器里的类型声明主要用于编辑器展示
    label: cc.Label = null; // 这里是 TypeScript 用来声明变量类型的写法，冒号后面是属性类型，等号后面是默认值

    @property({
        type: cc.Label,
        displayName: 'label info',
        tooltip: '显示一些信息用用！'
    }) // 使用 property 装饰器声明属性，括号里是属性类型，装饰器里的类型声明主要用于编辑器展示
    label_info: cc.Label = null; // 这里是 TypeScript 用来声明变量类型的写法，冒号后面是属性类型，等号后面是默认值

    @property(cc.String)
    text: string = 'hello';

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    curScreenSize: cc.Size = null;

    // constructor() { // 构造函数会进来两次，奇怪！
    //     super();
    //     console.log('constructor Helloworld');
    // }

    public start() {
        cc.debug.setDisplayStats(true);
        console.log('Helloworld.start' + this.text);
        // init logic
        this.label.string = this.text;
        /*
                let t: MyClass = new MyClass();
                t.test();
                t = null;
                */
        if (this.sprite) {
            let n = this.sprite.node;
            console.log('getFrameSize(' + cc.view.getFrameSize().width + ',' + cc.view.getFrameSize().height + ') getVisibleSizeInPixel(' + cc.view.getVisibleSizeInPixel().width + ',' + cc.view.getVisibleSizeInPixel().height + ')');
            console.log('getCanvasSize(' + cc.view.getCanvasSize().width + ',' + cc.view.getCanvasSize().height + ')');
            console.log('getDesignResolutionSize(' + cc.view.getDesignResolutionSize().width + ',' + cc.view.getDesignResolutionSize().height + ')');
            console.log('getVisibleSize(' + cc.view.getVisibleSize().width + ',' + cc.view.getVisibleSize().height + ')');
            console.log('getVisibleSizeInPixel(' + cc.view.getVisibleSizeInPixel().width + ',' + cc.view.getVisibleSizeInPixel().height + ')');
            console.log('getVisibleOrigin(' + cc.view.getVisibleOrigin().x + ',' + cc.view.getVisibleOrigin().y + ')');
            console.log('getVisibleOriginInPixel(' + cc.view.getVisibleOriginInPixel().x + ',' + cc.view.getVisibleOriginInPixel().y + ')');


            // let s = cc.view.getFrameSize();
            let s = cc.view.getVisibleSize();
            this.curScreenSize = s;
            this.curScreenSize.width = s.width / 2.0;
            this.curScreenSize.height = s.height / 2.0;
            // n.setPosition(new cc.Vec2(-s.width / 2.0, s.height / 2.0));

            // let s = cc.view.getVisibleSizeInPixel();
            // let s = cc.view.getCanvasSize();
            let seq = cc.sequence(cc.moveTo(2, cc.v2(-s.width, s.height)), cc.callFunc(this._moveFinal_left_top, this));

            // n.runAction(cc.moveTo(2, cc.v2(-s.width, s.height)));

            n.runAction(seq);
        }
    }

    public onLoad() {
        console.log('Helloworld.onLoad');
    }

    public myButton1Click(event: cc.Event.EventTouch, eventData: any) {
        // event.currentTarget
        let target = event.getCurrentTarget();
        // let n: cc.Node = target.getComponent(cc.Node);
        if (target instanceof cc.Button) {
            console.log('myButton1Click is cc.Button');
        }
        if (target instanceof cc.Node) { // 实际是cc.Node
            console.log('myButton1Click is cc.Node');
        }
        target.setPosition(new cc.Vec2(0, 0));

        let ss = cc.view.getVisibleSize();
        // target.setPosition(new cc.Vec2(-ss.width / 2.0, ss.height / 2.0));
        let n = this.sprite.node;
        n.runAction(cc.moveTo(2, cc.v2(-ss.width / 2.0, -ss.height / 2.0)));

        return;
        let actionTo = cc.moveBy(2, cc.v2(100, -100));
        target.runAction(actionTo);
        let b = target.getComponent(cc.Button);
        if (b) {
            let l = b.getComponentInChildren(cc.Label);
            if (l) {
                l.string = 'myBtn3';
            }
            // if (b.node.childrenCount > 0) {
            //     let c = b.node.children[0];
            //     let l = c.getComponent(cc.Label);
            //     if (l) {
            //         l.string = 'myBtn3';
            //     }
            // }
        }

        console.log('我的天呐！my xbpiao test!', event, eventData, cc.view.getFrameSize());
        this.label_info.string = cc.view.getFrameSize().width + ',' + cc.view.getFrameSize().height;
    }

    public buttonGoClick(event: cc.Event.EventTouch, eventData: any) {
        console.log('buttonGoClick test!');
        // 显示scene2
        cc.director.loadScene('scene2', (error, scene) => {
            if (scene) {
                // 加载成功的场景 cc.Scene 
                console.log('buttonGoClick scene2:', scene);
            }
            this.destroy();
        });
    }

    public checkBoxClicked(toggle: cc.Toggle) {
        // checkbox的点击事件
        cc.debug.setDisplayStats(toggle.isChecked);
    }

    protected onDestroy(): void {
        console.log('Helloworld.onDestroy');
    }

    // 注意方法名称使用下划线开头在属性检查器里就看不到该方法，与是否private无关
    private _myTestOne() {
        console.log('Helloworld.myTestOne tttttttttttt');
    }

    private _moveFinal_left_top() {
        if (this.sprite) {
            let n = this.sprite.node;
            let s = this.curScreenSize;
            var seq = cc.sequence(cc.moveTo(2, cc.v2(s.width, s.height)), cc.callFunc(this._moveFinal_right_top, this));
            n.runAction(seq);
        }
    }

    private _moveFinal_right_top() {
        if (this.sprite) {
            let n = this.sprite.node;
            let s = this.curScreenSize;
            var seq = cc.sequence(cc.moveTo(2, cc.v2(s.width, -s.height)), cc.callFunc(this._moveFinal_right_bottom, this));
            n.runAction(seq);
        }
    }

    private _moveFinal_right_bottom() {
        if (this.sprite) {
            let n = this.sprite.node;
            let s = this.curScreenSize;
            var seq = cc.sequence(cc.moveTo(2, cc.v2(-s.width, -s.height)), cc.callFunc(this._moveFinal_left_bottom, this));
            n.runAction(seq);
        }
    }

    private _moveFinal_left_bottom() {
        if (this.sprite) {
            let n = this.sprite.node;
            let s = this.curScreenSize;
            var seq = cc.sequence(cc.moveTo(2, cc.v2(-s.width, s.height)), cc.callFunc(this._moveFinal_left_top, this));
            n.runAction(seq);
        }
    }
}
