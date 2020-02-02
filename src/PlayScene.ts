import { CST } from "./CST";
import { CharacterSprite } from "./charactersprite";
import{Gameover} from './gameover'
export class PlayScene  extends Phaser.Scene{
    player!: Phaser.Physics.Arcade.Sprite;
    keyboard!: { [index: string]: Phaser.Input.Keyboard.Key };
    constructor(){
        
        super({
            key:CST.Scence.Play
        })

    }
    preload(){


        this.textures.addSpriteSheetFromAtlas("hero",{frameWidth:50,frameHeight:50, atlas:"knight", frame:"knight"})
        this.load.image('tiles', './assets/image/dungeon_sheet.png')
        this.load.image('sword', './assets/image/sword.png')
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
        let tile = map.addTilesetImage('dungeon_sheet','tiles')


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
        
        
        
        
        this.player = new CharacterSprite(this,415,740,'hero',26).setScale(0.30);
          //@ts-ignore
        // window.player = this.player;
        //camera
         this.cameras.main.startFollow(this.player).setZoom(6.5)
         this.physics.world.setBounds(0,0, map.widthInPixels, map.heightInPixels);
         
         
         
         //@ts-ignore
         this.keyboard = this.input.keyboard.addKeys("W, A, S, D, SPACE")
         //tile collisions
         this.physics.add.collider(this.player, rocks)
         this.physics.add.collider(this.player, wall)
         this.physics.add.collider(this.player, door)
         this.physics.add.overlap(this.player,coins_buff ,collect_buff)
         this.physics.add.overlap(this.player,coins_debuff ,collect_debuff,)
        
         // able to move objects/items to player
         //this.physics.accelerateTo(coins_debuff,this.player.x,this.player.y)
         
         door.setCollisionByProperty({collides:true})
         // collision for mid layer
         
         rocks.setCollisionByProperty({collides:true})
        // collision for top layer
        wall.setCollisionByProperty({collides:true})
        
         door.setTileLocationCallback(26,9,1.5,1, ()=>{
             alert("Must defeat mini bosses and collect keys to unlock this door")

           //@ts-ignore
           door.setTileLocationCallback(26,9,1.5,1, null)
         })

         //@ts-ignore
        function collect_buff(player,coin) {
            let num = 3;
            coin.destroy(true)
            player.hp++;
            player.xp++;
            if (player.xp === player.xpCap) {
                num++
                player.level++;
                player.xpCap++;
                player.maxHp+= num;
                player.xp =0;
                alert(`You have reached level:${player.level}`)
            }
            if (player.hp >= player.maxHp) {
                player.hp = player.maxHp
            }
 
            
            console.log('health:',player.hp,'xp:',player.xp,'level:',player.level);

            //console.log('coin:',coin,'player:',player);
            
        }
          //@ts-ignore
          function collect_debuff(player,coin) {
            player.hp--;
            let num = 3;
            console.log('health:',player.hp);
            coin.destroy(true)
            if (player.hp === 1 ||player.hp == 2) {
                alert(`health is low, You have ${player.hp} health remaining`)
            }
            if (player.hp === 0) {
               alert('Gamover')
                location.reload()
            }
            if (player.level++) {
                num++
                player-= num;
            }
            //console.log('coin:',coin,'player:',player);

        }
        //@ts-ignore

      

        

    }
    
    
    // Movement for player
    update(time: number, delta: number) { //delta 16.666 @ 60fps

            if (this.keyboard.D.isDown) {
                this.player.setVelocityX(60);
                //this.player.play('right',true)
                //this.player.play('netural',true)
            }

            if (this.keyboard.W.isDown) {
                this.player.setVelocityY(-60);
                //this.player.play('netural',true)
                
            }

            if (this.keyboard.S.isDown) {
                this.player.setVelocityY(60);
                //this.player.play('netural',true)
            }

            if (this.keyboard.A.isDown) {
                this.player.setVelocityX(-60);
                //this.player.play('left',true)
                //this.player.play('netural',true)
            }
            if (this.keyboard.A.isUp && this.keyboard.D.isUp) { //not moving on X axis
                this.player.setVelocityX(0);
                //this.player.play('netural',true)
            }
            if (this.keyboard.W.isUp && this.keyboard.S.isUp) { //not pressing y movement
                this.player.setVelocityY(0);
                //this.player.play('netural',true)
            }

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