import App from "../core/App";
import GameConfig from "../GameConfig";
import MainScene from "./scene/main/MainScene";
import SysChapter from "./sys/SysChapter";
import SysMap from "./sys/SysMap";
import ZipLoader from "../core/utils/ZipLoader";
import SysEnemy from "./sys/SysEnemy";
import AttackType from "../game/AttackType";
import { FlyAndHitAi } from "../ai/FlyAndHitAi";
import { MonsterAI1 } from "../game/GameAI";
import MonsterType from "../game/MonsterType";
import { FlyGameMove, PlaneGameMove, FixedGameMove } from "../game/GameMove";
var REG: Function = Laya.ClassUtils.regClass;
    export default class GameMain{
        
    constructor(){
        ZipLoader.load("res/tables.zip", new Laya.Handler(this, this.zipFun));
    }

    private zipFun(arr: any[]):void{
        App.init();
        this.initTable(arr);
        this.regClass();
        Laya.stage.addChild(App.layerManager);
        GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
    }

    private initTable(arr: any[]):void{
        App.tableManager.register(SysChapter.NAME,SysChapter);
        App.tableManager.register(SysMap.NAME,SysMap);
        App.tableManager.register(SysEnemy.NAME,SysEnemy);

        App.tableManager.onParse(arr);
    }

    private regClass():void{
        //攻击类型
        REG(AttackType.TAG + AttackType.FLYHIT,FlyAndHitAi);
        REG(AttackType.TAG + AttackType.BULLET,MonsterAI1);
        //怪物类型
        REG(MonsterType.TAG + MonsterType.FLY,FlyGameMove);
        REG(MonsterType.TAG + MonsterType.MOVE,PlaneGameMove);
        REG(MonsterType.TAG + MonsterType.FIXED,FixedGameMove);
        // REG(MonsterType.TAG + MonsterType.FIXED,MonsterAI1);//不动的
    }
}