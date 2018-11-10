//地鼠类
class Mole {
    //正常图，受击图，正常图最低点
    constructor(normalState, hitState, downY, hitCallBackHd, scoreImg) {
        this.normalState = normalState
        this.hitState = hitState
        this.downY = downY
        this.upY = this.normalState.y
        this.hitCallBackHd = hitCallBackHd
        this.scoreImg = scoreImg
        this.scoreY = this.scoreImg.y
        this.reset()
        //给正常图添加一个点击事件调用受击
        this.normalState.on(Laya.Event.CLICK, this, this.hit)
    }
    //重置
    reset() {
        this.normalState.visible = false
        this.hitState.visible = false
        this.scoreImg.visible = false
        this.isVctive = false
        this.isShow = false
        this.isHit = false
    }
    //显示
    show() {
        if (this.isVctive) return
        this.isVctive = true
        this.isShow = true
        this.type = Math.random() < 0.5 ? 1 : 2
        this.normalState.skin = `comp/mouse_normal_${this.type}.png`
        this.hitState.skin = `comp/mouse_hit_${this.type}.png`
        this.scoreImg.skin = `comp/score_${this.type}.png`
        this.normalState.y = this.downY
        this.normalState.visible = true
        //缓动效果
        Laya.Tween.to(this.normalState, { y: this.upY }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete))
    }
    //停留
    showComplete() {
        if (this.isShow && !this.isHit) {
            //定时执行一次函数(停留1.5秒消失)
            Laya.timer.once(1000, this, this.hide)
        }
    }
    //受击
    hit() {
        if (this.isShow && !this.isHit) {
            this.isShow = false
            this.isHit = true
            //因为显示过程中会调停留，需要两秒钟调用消失，所以这里当受击的时候我们要清除消失的定时器
            Laya.timer.clear(this, this.hide)
            this.normalState.visible = false
            this.hitState.visible = true
            this.hitCallBackHd.runWith(this.type)
            //定时500毫秒后调用重置按钮
            Laya.timer.once(500, this, this.reset)
            //显示飘分
            this.showScore()
        }
    }
    //消失
    hide() {
        if (this.isShow && !this.isHit) {
            this.isShow = false
            Laya.Tween.to(this.normalState, { y: this.downY }, 300, Laya.Ease.backIn, Laya.Handler.create(this, this.reset))
        }
    }
    //显示飘分效果
    showScore() {
        this.scoreImg.y = this.scoreY + 30
        this.scoreImg.scale(0, 0)
        this.scoreImg.visible = true
        Laya.Tween.to(this.scoreImg, { y: this.scoreY, scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut)
    }


}