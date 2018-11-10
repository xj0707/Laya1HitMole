var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var gameOverUI=(function(_super){
		function gameOverUI(){
			
		    this.restartBtn=null;
		    this.socreNum=null;

			gameOverUI.__super.call(this);
		}

		CLASS$(gameOverUI,'ui.gameOverUI',_super);
		var __proto__=gameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gameOverUI.uiView);

		}

		gameOverUI.uiView={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"comp/overBg.png","height":400,"sizeGrid":"20,18,20,18"}},{"type":"Image","props":{"y":54,"x":34,"skin":"comp/total Score.png"}},{"type":"Button","props":{"y":295,"x":161,"var":"restartBtn","stateNum":2,"skin":"comp/btn_restart.png"}},{"type":"Box","props":{"y":188,"x":161,"var":"socreNum"},"child":[{"type":"Clip","props":{"y":0,"x":0,"width":18,"skin":"comp/clip_number.png","name":"item0","height":24,"clipX":10}},{"type":"Clip","props":{"y":0,"x":18,"width":18,"skin":"comp/clip_number.png","name":"item1","height":24,"clipX":10}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"y":0,"x":126,"width":18,"skin":"comp/clip_number.png","name":"item7","height":24,"clipX":10}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10}}]}]};
		return gameOverUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.startBtn=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);

		}

		GameStartUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"comp/help.png"}},{"type":"Button","props":{"y":432,"x":311,"var":"startBtn","stateNum":2,"skin":"comp/btn_start.png"}}]};
		return GameStartUI;
	})(View);
var GameViewUI=(function(_super){
		function GameViewUI(){
			
		    this.timeBar=null;

			GameViewUI.__super.call(this);
		}

		CLASS$(GameViewUI,'ui.GameViewUI',_super);
		var __proto__=GameViewUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameViewUI.uiView);

		}

		GameViewUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":194,"x":157,"name":"item0"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":0,"width":138,"skin":"comp/mask-01.png","height":47}},{"type":"Image","props":{"y":17,"x":63,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":192,"x":344,"name":"item1"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":-1,"width":138,"skin":"comp/mask-02.png","height":47}},{"type":"Image","props":{"y":17,"x":63,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":198,"x":539,"name":"item2"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":1,"width":138,"skin":"comp/mask-03.png","height":47}},{"type":"Image","props":{"y":17,"x":63,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":284,"x":127,"name":"item3"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":8,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":0,"width":138,"skin":"comp/mask-04.png","height":47}},{"type":"Image","props":{"y":17,"x":63,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":284,"x":344,"name":"item4"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":0,"width":138,"skin":"comp/mask-05.png","height":47}},{"type":"Image","props":{"y":17,"x":63,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":544,"name":"item5"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":0,"width":138,"skin":"comp/mask-06.png","height":47}},{"type":"Image","props":{"y":17,"x":63,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":379,"x":121,"name":"item6"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":0,"width":138,"skin":"comp/mask-07.png","height":47}},{"type":"Image","props":{"y":17,"x":63,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":389,"x":344,"name":"item7"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":0,"width":138,"skin":"comp/mask-08.png","height":47}},{"type":"Image","props":{"y":17,"x":63,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":564,"name":"item8"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":0,"width":138,"skin":"comp/mask-09.png","height":47}},{"type":"Image","props":{"y":17,"x":63,"width":86,"skin":"comp/score_2.png","name":"scoreImg","height":30,"anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":10,"x":6,"var":"timeBar","skin":"comp/progress_time.png"}},{"type":"Box","props":{"y":49,"x":46,"name":"socreNum"},"child":[{"type":"Clip","props":{"y":0,"x":0,"width":18,"skin":"comp/clip_number.png","name":"item0","height":24,"clipX":10}},{"type":"Clip","props":{"y":0,"x":18,"width":18,"skin":"comp/clip_number.png","name":"item1","height":24,"clipX":10}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"y":0,"x":126,"width":18,"skin":"comp/clip_number.png","name":"item7","height":24,"clipX":10}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10}}]}]};
		return GameViewUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;
		    this.hammer=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);

		}

		HammerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":59,"x":36,"width":98,"var":"hammer","skin":"comp/hammer.png","rotation":-20,"pivotY":37,"pivotX":35,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":59,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":45,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":42,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"x":[{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":46,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":40,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}],"rotation":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
		return HammerUI;
	})(View);