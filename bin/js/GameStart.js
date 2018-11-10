//游戏开始界面类
class GameStart extends ui.GameStartUI {
    constructor() {
        super()
        this.startBtn.on(Laya.Event.CLICK, this, this.onStartGame)
    }
    //开始游戏
    onStartGame() {
        //移除自己的页面 进入游戏界面
        this.removeSelf()
        if (!LayaSample.gameView) {
            LayaSample.gameView = new GameView()  //实例一个全局类变量
        }
        LayaSample.gameView.gameStart()
        Laya.stage.addChild(LayaSample.gameView)
    }
}