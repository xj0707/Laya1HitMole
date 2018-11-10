
//游戏主界面类继承ui图类
class GameView extends ui.GameViewUI {
    constructor() {
        super()
        this.moleNum = 9            //地鼠数量
        this.moles = []             //地鼠数组
        this.hitCallBackHd = Laya.Handler.create(this, this.setScore, null, false)
        for (let i = 0; i < this.moleNum; i++) {
            this.box = this.getChildByName(`item${i}`)  //获取盒子
            this.mole = new Mole(this.box.getChildByName('normal'), this.box.getChildByName('hit'), 21, this.hitCallBackHd, this.box.getChildByName('scoreImg')) //实例地鼠
            this.moles.push(this.mole)
        }
        this.hammer = new Hammer()
        this.addChild(this.hammer)
        this.hammer.visible = false

    }
    //游戏开始
    gameStart() {
        this.timeBar.value = 1      //设置进度条
        this.socre = 0              //初始分
        this.updateSorceUI()
        //添加小锤子
        this.hammer.visible = true
        this.hammer.start()
        //循环定时执行
        Laya.timer.loop(1000, this, this.onShow)
    }
    //显示地鼠
    onShow() {
        //进度条减少
        this.timeBar.value -= (1 / 90)
        if (this.timeBar.value <= 0) {
            this.gameOver()
            return
        }
        //随机显示那个地鼠洞出地鼠
        let index = Math.floor(Math.random() * this.moleNum)
        this.moles[index].show()
    }
    //游戏结束
    gameOver() {
        Laya.timer.clear(this, this.onShow)
        this.hammer.visible=false
        this.hammer.end()
        if (!LayaSample.gameOver) {
            LayaSample.gameOver = new GameOver()
        }
        //设置这个游戏结束面板显示位置 默认是左上角的
        LayaSample.gameOver.centerX = 0
        LayaSample.gameOver.centerY = 40
        LayaSample.gameOver.showScore(this.socre)
        Laya.stage.addChild(LayaSample.gameOver)
    }
    //计分
    setScore(type) {
        this.socre += (type == 1 ? -100 : 100)
        this.socre <= 0 ? this.socre = 0 : null
        this.updateSorceUI(this.socre)
    }
    //更新分数
    updateSorceUI(socre = 0) {
        let data = {}
        for (let i = 9; i >= 0; i--) {
            data[`item${i}`] = { index: Math.floor(socre % 10) }
            socre /= 10
        }
        this.getChildByName('socreNum').dataSource = data
    }


}