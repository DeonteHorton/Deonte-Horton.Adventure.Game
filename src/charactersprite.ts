export class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
    //Creates the type for this player
    hp: number;
    maxHp:number;
    attack:number;
    xp:number;
    xpCap:number;
    level:number;
    keys:number;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);

        // Updates the current sprite and gives the sprite a dynamic body
        // Creating properties for this player
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.hp = 100;
        this.xpCap = 5;
        this.maxHp = 200;
        this.attack = 25;
        this.xp = 0;
        this.level = 1;
        this.keys = 0;

    }  
}
