//主引擎类
class LayaSample {
    constructor() {
        //初始化引擎
        Laya.init(800, 600, laya.webgl.WebGL)
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL  //等比缩放
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER  //水平居中
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE  //垂直居中
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE  //不横屏不竖屏
        //设置stage颜色
        Laya.stage.bgColor = '#ffcccc'
        //加载资源
        Laya.loader.load('res/atlas/comp.atlas', Laya.Handler.create(this, this.onLoaded), null, Laya.loader.ATLAS)
    }
    //游戏登录页面
    onLoaded() {
        //播放背景音乐
        Laya.SoundManager.playMusic('res/mp3/bgm2.mp3',0,null)
        LayaSample.gameStart = new GameStart()  //实例一个全局类变量
        Laya.stage.addChild(LayaSample.gameStart)
    }
}
//启动主引擎
new LayaSample()