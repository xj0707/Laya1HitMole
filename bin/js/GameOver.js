//游戏结束界面类
class GameOver extends ui.gameOverUI {  //这里为啥是小写的gameOverUI是因为编辑模式写的小写
    constructor() {
        super()
        //给按钮添加一个点击事件
        this.restartBtn.on(Laya.Event.CLICK, this, this.restartGame)
    }
    //重新开始游戏
    restartGame() {
        //移除自己界面
        this.removeSelf()
        //移除游戏中显示页面
        LayaSample.gameView.removeSelf()
        //显示登录界面
        Laya.stage.addChild(LayaSample.gameStart)  //这里就是加载的全局类变量
    }
    //结束显示分数
    showScore(socre) {
        let data = {}
        for (let i = 9; i >= 0; i--) {
            data[`item${i}`] = { index: Math.floor(socre % 10) }
            socre /= 10
        }
        this.socreNum.dataSource = data  //这里的socreNum是在图片资源哪里定义的全局变量，所以可以直接这么写
    }
}