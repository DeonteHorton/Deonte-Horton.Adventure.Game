import { CST } from "./CST";
import { CharacterSprite } from "./charactersprite";
import {Mini_bossSprite} from './mini_boss'
import{MinionSprite} from './minion'
import{Gameover} from './gameover'
export class PlayScene  extends Phaser.Scene{
    player!: Phaser.Physics.Arcade.Sprite;
    keyboard!: { [index: string]: Phaser.Input.Keyboard.Key };
    attack!: Phaser.GameObjects.Image;
    minion!: Phaser.Physics.Arcade.Sprite;
    mini_boss!: Phaser.Physics.Arcade.Sprite;
    monsters!: Phaser.Physics.Arcade.Group;
    constructor(){
        
        super({
            key:CST.Scence.Play
        })

    }
    preload(){

        this.textures.addSpriteSheetFromAtlas("hero",{frameWidth:50,frameHeight:50, atlas:"knight", frame:"knight"})
        this.load.image('tiles', './assets/image/dungeon_sheet.png')
        this.load.image('mini-boss', './assets/sprites/miniboss.png')
        this.load.image('minion', './assets/sprites/minion.png')
        this.load.image('coin-xp', './assets/image/coins/real-coin.png')
        this.load.image('coin-damage', './assets/image/coins/fake-coin.png')

        this.load.tilemapTiledJSON('map','./assets/map/mappy.json')
        
        
        console.log(this.textures.list);
        this.anims.create({
            key:"left",
            frameRate:7,
            frames:this.anims.generateFrameNumbers("hero",{
                start:2,
                end:3,
            })
        })
        this.anims.create({
            key:"right",
            frameRate:7,
            frames:this.anims.generateFrameNumbers("hero",{
                start:4,
                end:5
            })
            })
            this.anims.create({
                key:"netural",
                frameRate:7,
                frames:this.anims.generateFrameNumbers("hero",{
                    start:0,
                    end:1
                })
            })       
            
        }
        
        
        create(){

        var map;
        //Adding map and tileset image for map
        map = this.add.tilemap('map')
        let tile = map.addTilesetImage('dungeon_sheet','tiles');

        //Encase a bug occurs, anything thats moveable will collide with world boundary
        this.physics.world.setBounds(0,0, map.widthInPixels, map.heightInPixels);

        // tile layers
        let floor = map.createStaticLayer('floor',[tile],0,0).setDepth(0)
        let rocks = map.createStaticLayer('decorations',[tile],0,0).setDepth(2);
        let door = map.createStaticLayer('doors',[tile],0,0).setDepth(3)
        let wall = map.createStaticLayer('wall',[tile],0,0); 
        let chest = map.createStaticLayer('gameover',[tile],0,0)
        
        // interactive objects
        
        var coins_buff = this.physics.add.group()
        var coins_debuff = this.physics.add.group()
        
        let good_coins = map.getObjectLayer('xp-coins')['objects'];
        good_coins.forEach((element)=>{
            let coin = coins_buff.create(element.x,element.y,'coin-xp')
            coin.setScale(0.03);
            coin.setOrigin(0,1);
        })
        
        let bad_coins = map.getObjectLayer('damage-coins')['objects'];
        bad_coins.forEach((element)=>{
            let coin = coins_debuff.create(element.x,element.y,'coin-damage')
            coin.setScale(0.03);
            coin.setOrigin(0,1);
        })


        //@ts-ignore
        this.keyboard = this.input.keyboard.addKeys("RIGHT,LEFT,UP,DOWN")
        
        
        this.monsters = this.physics.add.group({ immovable: true });

        
        for (let i = 0; i < 6; i++) {
            let x = Phaser.Math.FloatBetween(100,700)
            let y = Phaser.Math.FloatBetween(100,700)
            this.minion = new MinionSprite(this,x,y,'minion',0).setScale(0.25) 
            this.monsters.add(this.minion); 
        }

        for (let i = 0; i < 3; i++) {
            let x = Phaser.Math.FloatBetween(100,700)
            let y = Phaser.Math.FloatBetween(100,700)
            this.mini_boss = new Mini_bossSprite(this,x,y,'mini-boss',0).setScale(0.25)
            this.monsters.add(this.mini_boss)
        }

        this.player = new CharacterSprite(this,440,777,'hero',10).setScale(0.30);
        


        //@ts-ignore
        window.minion = this.minion;
        //@ts-ignore
        window.player = this.player;
        //@ts-ignore
        window.mini_boss = this.mini_boss;
        //camera thats set to player
        this.cameras.main.startFollow(this.player).setZoom(6.5)


        //collisions properties
        this.physics.world.addCollider(this.mini_boss,rocks)
        this.physics.world.addCollider(this.minion,rocks)

        this.physics.add.collider(this.player, rocks)
        this.physics.add.collider(this.player, wall)

        this.physics.world.addCollider(this.monsters.getChildren(),wall)
        this.physics.world.addCollider(this.monsters.getChildren(),rocks)
        this.physics.world.addCollider(this.player,this.monsters.getChildren(),damageOnCollide)

        this.physics.add.collider(this.player, door)

        //when player collides with  the chest. game ends and restart
         this.physics.add.collider(this.player, chest,()=>{
             alert('YOU WIN!!');
             location.reload()
         })
         this.physics.add.overlap(this.player,coins_buff ,collect_buff)
         this.physics.add.overlap(this.player,coins_debuff ,collect_debuff)
        
         chest.setCollisionByProperty({collides:true})
         door.setCollisionByProperty({collides:true})
         rocks.setCollisionByProperty({collides:true})
         wall.setCollisionByProperty({collides:true})


        // when player steps within distance of the tile, receives and alert
         //@ts-ignore
         wall.setTileLocationCallback(27,49,1,1,(player)=>{
             alert(`Welcome Mighty Hero,You've entered a dungeon rumored to have treasure.Up ahead is where the treasure lies.You can see coins all over the dungeon,you decide to pick up a very shiny coin ,it heals you and you feel more powerful, you see another coin that is dull and decide to pick it up , it damages you and now you have ${player.hp}. You must be wary Hero.There are traps and monsters here for those that wishes to obtain the treasure`)

             //Allow to alert only once
            //@ts-ignore
            wall.setTileLocationCallback(27,49,1,1,null)
         })

        //@ts-ignore
         door.setTileLocationCallback(26,9,1.5,1, (player)=>{
             alert(`Theres a chest on the other side, I need three keys, I only have ${player.keys}. I must collect coins to gain level and keys`)
         })
         chest.setTileLocationCallback(26,1,3,3, ()=>{
            alert("The chest in within my reach!!")

             //Allow to alert only once
          //@ts-ignore
          chest.setTileLocationCallback(26,1,3,3, null)
        })

        

        //@ts-ignore
        function damageOnCollide(player,enemy) {
            player.hp--;
            console.log(`health:${player.hp}`);
            if (player.hp === 0 ) {
             alert('You Died')  
             location.reload()
            }
        }
    
        // How the player collect the coins to gain xp, health, and keys
         //@ts-ignore
        function collect_buff(player,coin) {
            coin.destroy(true)
            let num = 30;
            player.hp++;
            player.xp++;
            if (player.xp === player.xpCap) {
                num++
                player.hp+= num;
                player.level++;
                player.xpCap++;
                player.keys++;
                player.maxHp+= num;
                player.xp =0;
                alert(`You have reached level:${player.level} and you're health cap is now ${player.maxHp}, current health ${player.hp}`)
            }
            if (player.hp >= player.maxHp) {
                player.hp = player.maxHp
            }
            // must reach level four to reach the chest and end the game
            if (player.keys === 3) {
                door.setCollisionByProperty({collides:true},false)
                //@ts-ignore
                door.setTileLocationCallback(26,9,1.5,1, null)
                alert(`I have four keys now, I can open the door now!!`)
            } 
            
            console.log(`health:${player.hp} xp:${player.xp} level:${player.level}`);
        }


        // How the player takes damage from the fake coins
          //@ts-ignore
          function collect_debuff(this:this,player,coin) {
            player.hp--;
            console.log(`health:${player.hp}`);
            coin.destroy(true)
            if (player.hp <= 2) {
                alert(`I can't take to many hits, I only have ${player.hp} health remaining`)
            }            
        }          
    }
    
    // Movement for player
    update(time: number, delta: number) { //delta 16.666 @ 60fps

        // An example of how to  make more than one object move

        for (let i = 0; i < this.monsters.getChildren().length; i++) {
            this.physics.accelerateToObject(this.monsters.getChildren()[i], this.player,100,100,100);

        }

            if (this.keyboard.RIGHT.isDown) {
                this.player.setVelocityX(70);
            }

            if (this.keyboard.UP.isDown) {
                this.player.setVelocityY(-70);
            }

            if (this.keyboard.DOWN.isDown) {
                this.player.setVelocityY(70);
            }

            if (this.keyboard.LEFT.isDown) {
                this.player.setVelocityX(-70);
            }
            if (this.keyboard.LEFT.isUp && this.keyboard.RIGHT.isUp) { //not moving on X axis
                this.player.setVelocityX(0);
            }
            if (this.keyboard.UP.isUp && this.keyboard.DOWN.isUp) { //not pressing y movement
                this.player.setVelocityY(0);
            }
            // if (this.keyboard.SPACE.isDown) {
            //     var attack = this.add.image(this.player.x,this.player.y,'sword').setScale(0.5)
            //     this.physics.world.enableBody(attack); 
            //     this.physics.add.existing(attack)
            //     //@ts-ignore
            //     attack.body.velocity.y -= 250;
            // }


            // Animation for player
            if (this.player.body.velocity.x > 0) { //moving right
                this.player.play("right", true);
            } else if (this.player.body.velocity.x < 0) { //moving left
                this.player.play("left", true);
            } else if (this.player.body.velocity.y < 0) { //moving up
                this.player.play("netural", true);
            } else if (this.player.body.velocity.y > 0) { //moving down
                this.player.play("netural", true);
            } 
    }
}

