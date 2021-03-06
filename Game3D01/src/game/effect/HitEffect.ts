import Game from "../Game";
import GamePro from "../GamePro";
import GameProType from "../GameProType";

export default class HitEffect{
    static TAG:string = "HitEffect";

    public player:GamePro;
    public sp3d:Laya.Sprite3D;
    constructor() {
        this.sp3d = Laya.Sprite3D.instantiate(Laya.loader.getRes("h5/bulletsEffect/20000/monster.lh"));
        // Game.monsterResClones.push(this.sp3d);
        // console.log("创建新的受击特效");
    }

    static addEffect(player:GamePro):HitEffect
    {
        let effect:HitEffect = Laya.Pool.getItemByClass(HitEffect.TAG,HitEffect);
        // let effect:HitEffect = new HitEffect();
        effect.player = player;
        // effect.player.addSprite3DToAvatarNode(player.gamedata.proType == GameProType.Hero ? "joint2" : "guadian", effect.sp3d);
        effect.player.sp3d.addChild(effect.sp3d);
        setTimeout(() => {
            effect.recover();
        }, 800);
        return effect;
    }

    recover():void
    {
        // this.player.removeSprite3DToAvatarNode(this.sp3d);
        this.player.sp3d.removeChild(this.sp3d);
        Laya.Pool.recover(HitEffect.TAG,this);
        this.sp3d = null;
    }
}