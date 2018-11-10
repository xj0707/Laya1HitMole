//小木锤类
class Hammer extends ui.HammerUI {
    constructor() {
        super()
    }
    //开始使用
    start() {
        //隐藏鼠标
        Laya.Mouse.hide()
        //给舞台添加侦听事件
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown)
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
        this.onMouseMove()
    }
    //结束使用
    end() {
        //结束显示鼠标
        Laya.Mouse.show()
        //关闭事件
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown)
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
    }
    //点击鼠标播放动画
    onMouseDown() {
        this.hit.play(0, false) //false 表示播放一次
    }
    //鼠标移动小锤子也要跟到移动
    onMouseMove() {
        this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 3)
    }
}