import { CST } from "./CST";
import { Physics } from "phaser";
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
        
        // to load objects- must make a key
        this.load.spritesheet('items', './assets/image/dungeon_sheet.png',{frameWidth:64, frameHeight:64} )
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

            this.input.on("pointerdown",(pointer:Phaser.Input.Pointer)=>{

                    var attack = this.add.image(pointer.worldX,pointer.worldY,"sword").setScale(0.20)

                    this.input.on("pointerup",()=>{
                        attack.destroy()
                    })
                 
            })

        
        let map = this.add.tilemap('map')
        
        let tile = map.addTilesetImage('dungeon_sheet','tiles')


        // tile layers
        let botlayer = map.createStaticLayer('floor',[tile],0,0).setDepth(0)
        let midlayer = map.createStaticLayer('decorations',[tile],0,0);
        let door = map.createStaticLayer('door',[tile],0,0)
        let toplayer = map.createStaticLayer('wall',[tile],0,0);

        let items = map.createFromObjects("object layer", 166, {key:'tiles'}).map
        
        
                
          this.player = this.physics.add.sprite(410,740,'hero',26).setScale(0.30);
          //@ts-ignore
         window.player = this.player;
          //camera
         this.cameras.main.startFollow(this.player).setZoom(6.5)
         this.physics.world.setBounds(0,0, map.widthInPixels, map.heightInPixels);

        
         //@ts-ignore
         this.keyboard = this.input.keyboard.addKeys("W, A, S, D, SPACEBAR")

         //Map collisions
         this.physics.add.collider(this.player, midlayer)
         this.physics.add.collider(this.player, toplayer)
         this.physics.add.collider(this.player, door)
         door.setCollisionByProperty({collides:true})
         door.setCollision(173)
        // indexes for mid layer
         midlayer.setCollision([23,24,47,48,71,72,131,132,155,159,184,185,186,187])
        // indexes for top layer
         toplayer.setCollision([0,169,217,218,219,220,1610612956,1610612954,1610612905,2684354729,2147483868,2147483867,2147483866,2147483865,3758096604, 3221225690, 3221225689,3758096603,3221225692,3221225691,536871132,536871130])


    }
    // movement
    //adding possible animations
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