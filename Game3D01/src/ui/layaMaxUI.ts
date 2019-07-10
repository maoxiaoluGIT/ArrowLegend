/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.test {
    export class Blood2UIUI extends View {
		public bar:Laya.Sprite;
        public static  uiView:any ={"type":"View","props":{"width":85,"height":17},"compId":2,"child":[{"type":"Sprite","props":{"texture":"bg/xuetiaodi.png"},"compId":3},{"type":"Sprite","props":{"var":"bar","texture":"bg/xuetiaoshanghong.png"},"compId":4}],"loadList":["bg/xuetiaodi.png","bg/xuetiaoshanghong.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(Blood2UIUI.uiView);
        }
    }
    REG("ui.test.Blood2UIUI",Blood2UIUI);
    export class BloodUIUI extends View {
		public bar:Laya.Image;
		public colBox:Laya.Box;
		public txt:Laya.Label;
        public static  uiView:any ={"type":"View","props":{"y":24,"x":42,"width":85,"height":24,"anchorY":1,"anchorX":0.5},"compId":2,"child":[{"type":"Image","props":{"y":7,"x":0,"skin":"bg/heroBlood.png"},"compId":8},{"type":"Image","props":{"y":7,"width":85,"var":"bar","skin":"bg/xuetiaoshang.png","height":17},"compId":10},{"type":"Box","props":{"y":7,"width":85,"var":"colBox","height":17},"compId":7},{"type":"Label","props":{"y":2,"x":0,"width":85,"var":"txt","text":"600","stroke":3,"height":18,"fontSize":18,"color":"#ffffff","bold":true,"align":"center"},"compId":6}],"loadList":["bg/heroBlood.png","bg/xuetiaoshang.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(BloodUIUI.uiView);
        }
    }
    REG("ui.test.BloodUIUI",BloodUIUI);
    export class equipUI extends Scene {
		public bg:Laya.Image;
        public static  uiView:any ={"type":"Scene","props":{"width":750,"height":1334},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"main/zhudi.jpg"},"compId":3},{"type":"Label","props":{"y":553,"x":305,"width":200,"text":"装备","height":50,"fontSize":40,"color":"#40f108","bold":true,"align":"center"},"compId":19}],"loadList":["main/zhudi.jpg"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(equipUI.uiView);
        }
    }
    REG("ui.test.equipUI",equipUI);
    export class HeroFootUI extends View {
        public static  uiView:any ={"type":"View","props":{},"compId":2,"child":[{"type":"Sprite","props":{"y":-55,"x":-66,"texture":"bg/renlankuang.png"},"compId":3}],"loadList":["bg/renlankuang.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(HeroFootUI.uiView);
        }
    }
    REG("ui.test.HeroFootUI",HeroFootUI);
    export class mainSceneUI extends Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("test/mainScene");
        }
    }
    REG("ui.test.mainSceneUI",mainSceneUI);
    export class mainUIUI extends Scene {
		public btn_xin:Laya.Button;
		public jinbishuliang:Laya.Box;
		public di:Laya.Image;
		public jinbi:Laya.Image;
		public jinbishu:Laya.FontClip;
		public shandianshuliang:Laya.Box;
		public jingyantiao:Laya.Image;
		public shandian:Laya.Image;
		public shandianshu:Laya.FontClip;
		public jingyanshuliang:Laya.Box;
		public jingyan:Laya.Image;
		public dengji:Laya.FontClip;
		public shuijingshuliang:Laya.Box;
		public shuijing:Laya.Image;
		public shuijingshu:Laya.FontClip;
        public static  uiView:any ={"type":"Scene","props":{"width":750,"height":1334},"compId":2,"child":[{"type":"Button","props":{"y":148,"x":701.5,"var":"btn_xin","stateNum":1,"skin":"main/btn_xin.png","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Box","props":{"y":17,"x":380,"var":"jinbishuliang"},"compId":7,"child":[{"type":"Image","props":{"y":6,"x":25,"var":"di","skin":"main/shukuang.png"},"compId":5},{"type":"Image","props":{"var":"jinbi","skin":"main/jinbijia.png"},"compId":4},{"type":"FontClip","props":{"y":15,"x":53,"width":111,"var":"jinbishu","value":"123","skin":"main/clipshuzi.png","sheet":"0123 4567 89+-","height":23,"align":"center"},"compId":6}]},{"type":"Box","props":{"y":17,"x":193,"var":"shandianshuliang"},"compId":8,"child":[{"type":"Image","props":{"y":6,"x":25,"skin":"main/shukuang.png"},"compId":9},{"type":"Image","props":{"y":8,"x":26,"var":"jingyantiao","skin":"main/jindutiao.png"},"compId":17},{"type":"Image","props":{"y":1,"x":8,"var":"shandian","skin":"main/shandianjia.png"},"compId":10},{"type":"FontClip","props":{"y":49,"x":53,"width":111,"value":"12:00","skin":"main/clipshuzi.png","sheet":"0123 4567 89+-","height":23,"align":"center"},"compId":23},{"type":"FontClip","props":{"y":15,"x":53,"width":111,"var":"shandianshu","value":"123","skin":"main/clipshuzi.png","sheet":"0123 4567 89+-","height":23,"align":"center"},"compId":11},{"type":"Image","props":{"y":53,"x":106,"skin":"main/maohao.png"},"compId":24}]},{"type":"Box","props":{"y":17,"x":10,"var":"jingyanshuliang"},"compId":12,"child":[{"type":"Image","props":{"y":6,"x":25,"skin":"main/shukuang.png"},"compId":13},{"type":"Image","props":{"y":8,"x":27,"var":"jingyan","skin":"main/jindutiaolan.png"},"compId":16},{"type":"Image","props":{"y":-5,"x":0,"skin":"main/pai.png"},"compId":14},{"type":"FontClip","props":{"y":14.5,"x":3,"width":51,"var":"dengji","value":"12","spaceX":-2,"skin":"main/clipshuzi.png","sheet":"0123 4567 89+-","height":23,"align":"center"},"compId":15}]},{"type":"Box","props":{"y":17,"x":563,"var":"shuijingshuliang"},"compId":18,"child":[{"type":"Image","props":{"y":6,"x":25,"skin":"main/shukuang.png"},"compId":19},{"type":"Image","props":{"var":"shuijing","skin":"main/zuanshijia.png"},"compId":20},{"type":"FontClip","props":{"y":15,"x":53,"width":111,"var":"shuijingshu","value":"123","skin":"main/clipshuzi.png","sheet":"0123 4567 89+-","height":23,"align":"center"},"compId":21}]}],"loadList":["main/btn_xin.png","main/shukuang.png","main/jinbijia.png","main/clipshuzi.png","main/jindutiao.png","main/shandianjia.png","main/maohao.png","main/jindutiaolan.png","main/pai.png","main/zuanshijia.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(mainUIUI.uiView);
        }
    }
    REG("ui.test.mainUIUI",mainUIUI);
    export class RockerViewUI extends View {
		public sp:Laya.Sprite;
		public dir:Laya.Box;
		public sp0:Laya.Sprite;
        public static  uiView:any ={"type":"View","props":{},"compId":2,"child":[{"type":"Sprite","props":{"width":304,"var":"sp","texture":"bg/rockerBg.png","pivotY":152,"pivotX":152,"height":304},"compId":3},{"type":"Box","props":{"y":0,"x":0,"width":304,"var":"dir","pivotY":152,"pivotX":152,"height":304},"compId":7,"child":[{"type":"Sprite","props":{"y":-9,"x":26.5,"texture":"bg/rollDir.png"},"compId":5}]},{"type":"Sprite","props":{"width":251,"var":"sp0","texture":"bg/rockerBall.png","pivotY":126,"pivotX":126,"height":251},"compId":4}],"loadList":["bg/rockerBg.png","bg/rollDir.png","bg/rockerBall.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(RockerViewUI.uiView);
        }
    }
    REG("ui.test.RockerViewUI",RockerViewUI);
    export class settingUI extends Scene {
		public bg:Laya.Image;
        public static  uiView:any ={"type":"Scene","props":{"width":750,"height":1334},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"main/zhudi.jpg"},"compId":3},{"type":"Label","props":{"y":533,"x":285,"width":200,"text":"设置","height":50,"fontSize":40,"color":"#40f108","bold":true,"align":"center"},"compId":19}],"loadList":["main/zhudi.jpg"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(settingUI.uiView);
        }
    }
    REG("ui.test.settingUI",settingUI);
    export class shopUI extends Scene {
		public bg:Laya.Image;
        public static  uiView:any ={"type":"Scene","props":{"width":750,"height":1334},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"main/zhudi.jpg"},"compId":3},{"type":"Label","props":{"y":543,"x":295,"width":200,"text":"商店","height":50,"fontSize":40,"color":"#40f108","bold":true,"align":"center"},"compId":19}],"loadList":["main/zhudi.jpg"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(shopUI.uiView);
        }
    }
    REG("ui.test.shopUI",shopUI);
    export class talentUI extends Scene {
		public bg:Laya.Image;
        public static  uiView:any ={"type":"Scene","props":{"width":750,"height":1334},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"main/zhudi.jpg"},"compId":3},{"type":"Label","props":{"y":523,"x":275,"width":200,"text":"天赋","height":50,"fontSize":40,"color":"#40f108","bold":true,"align":"center"},"compId":19}],"loadList":["main/zhudi.jpg"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(talentUI.uiView);
        }
    }
    REG("ui.test.talentUI",talentUI);
    export class TestSceneUI extends Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("test/TestScene");
        }
    }
    REG("ui.test.TestSceneUI",TestSceneUI);
    export class worldUI extends Scene {
		public bg:Laya.Image;
		public dao:Laya.Image;
		public btn_start:Laya.Button;
		public baoxiang:Laya.Image;
		public guanwenzi:Laya.Label;
		public biaoti2:Laya.Label;
		public baioti:Laya.Label;
		public zuigao:Laya.Label;
		public jinbishu:Laya.FontClip;
        public static  uiView:any ={"type":"Scene","props":{"width":750,"height":1334},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"main/zhudi.jpg"},"compId":3},{"type":"SkeletonPlayer","props":{"y":642,"x":355,"url":"main/shuiwen.sk","runtime":"laya.ani.bone.Skeleton"},"compId":5},{"type":"Image","props":{"y":321,"x":33,"var":"dao","skin":"main/yidao.png"},"compId":4},{"type":"Button","props":{"y":1046,"x":375,"width":367,"var":"btn_start","stateNum":1,"skin":"main/btn_huang.png","sizeGrid":"0,25,0,21","height":157,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":88,"x":133,"skin":"main/anniudian.png"},"compId":7},{"type":"Image","props":{"y":18.5,"x":134,"skin":"main/kaishi.png"},"compId":8}]},{"type":"Image","props":{"y":808,"x":233,"var":"baoxiang","skin":"main/baoxiang01.png"},"compId":10},{"type":"Sprite","props":{"y":883,"x":205,"texture":"main/haibo.png"},"compId":11},{"type":"Label","props":{"y":852,"x":343,"var":"guanwenzi","text":"通过关卡1-10","fontSize":30,"color":"#ffffff"},"compId":12},{"type":"Label","props":{"y":171,"x":229.98046875,"var":"biaoti2","text":"1.我也草原","fontSize":60,"color":"#000000","alpha":0.5,"align":"center"},"compId":14,"child":[{"type":"Script","props":{"y":1,"x":0,"strength":2,"runtime":"laya.effect.BlurFilterSetter"},"compId":15}]},{"type":"Label","props":{"y":166,"x":230,"var":"baioti","text":"1.我也草原","fontSize":60,"color":"#ffffff","align":"center"},"compId":13},{"type":"Label","props":{"y":239,"x":278,"var":"zuigao","text":"最高层数：9/50","fontSize":30,"color":"#ffffff"},"compId":16},{"type":"FontClip","props":{"y":1064,"x":364,"width":63,"var":"jinbishu","value":"1","skin":"main/clipshuzi.png","sheet":"0123 4567 89+-","height":23,"align":"left"},"compId":18}],"loadList":["main/zhudi.jpg","main/shuiwen.sk","main/yidao.png","main/btn_huang.png","main/anniudian.png","main/kaishi.png","main/baoxiang01.png","main/haibo.png","main/clipshuzi.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(worldUI.uiView);
        }
    }
    REG("ui.test.worldUI",worldUI);
}