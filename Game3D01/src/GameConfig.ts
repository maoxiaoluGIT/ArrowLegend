/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=750;
    static height:number=1334;
    static scaleMode:string="showall";
    static screenMode:string="vertical";
    static alignV:string="middle";
    static alignH:string="center";
    static startScene:any="test/Loading.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=true;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;

    }
}
GameConfig.init();