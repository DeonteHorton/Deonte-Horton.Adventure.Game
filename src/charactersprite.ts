export class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
    hp: number;
    maxHp:number;
    attack:number;
    xp:number;
    xpCap:number;
    level:number;
    keys:number;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);

        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.hp = 50;
        this.xpCap = 5;
        this.maxHp = 100;
        this.attack = 25;
        this.xp = 0;
        this.level = 1;
        this.keys = 0;
    }  
}
