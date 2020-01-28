import { CST } from "./CST";
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
        this.load.image('floor', './assets/image/dungeon_sheet.png')
        // to load objects- must make a key
        this.load.spritesheet('items', './assets/image/dungeon_sheet.png',{frameWidth:16, frameHeight:16} )
        this.load.tilemapTiledJSON('map','./assets/map/mappy.json')


        console.log(this.textures.list);
        // this.anims.create({
        //     key:"left",
        //     frameRate:10,
        //     frames:this.anims.generateFrameNumbers("hero",{
        //         start:2,
        //         end:3,
        //     })
        // })
        // this.anims.create({
        //     key:"right",
        //     frameRate:10,
        //     frames:this.anims.generateFrameNumbers("hero",{
        //         start:4,
        //         end:5
        //     })
        // })
        this.anims.create({
            key:"netural",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("hero",{
                start:0,
                end:1
            })
        })       
        
    }
    create(){        
        let map = this.add.tilemap('map')
        
        let tile = map.addTilesetImage('dungeon_sheet','floor')
        
        let botlayer = map.createStaticLayer('floor',[tile],0,0).setDepth(-1)
        let midlayer = map.createStaticLayer('decorations',[tile],0,0);
        let toplayer = map.createStaticLayer('wall',[tile],0,0);

        let items = map.createFromObjects("object layer", 164, {key:'floor'}).map
        
        
                
          this.player = this.physics.add.sprite(425,760,'hero',26).setScale(0.29);
          //@ts-ignore
         window.player = this.player;
          //camera
         this.cameras.main.startFollow(this.player).setZoom(3)
         this.physics.world.setBounds(0,0, map.widthInPixels, map.heightInPixels);

        
         //@ts-ignore
         this.keyboard = this.input.keyboard.addKeys("LEFT,RIGHT,UP,DOWN")

         //Map collisions
         this.physics.add.collider(this.player, toplayer)
         toplayer.setCollisionByProperty({collides:true})
         toplayer.setCollision([0,169,217,218,219,220,1610612956,1610612954,1610612905,2684354729,2147483868,2147483867,2147483866,2147483865,3758096604, 3221225690, 3221225689,3758096603,3221225692,3221225691,536871132,536871130])


    }
    // movement
    //adding possible animations
    update(time: number, delta: number) { //delta 16.666 @ 60fps

      
            if (this.keyboard.RIGHT.isDown === true) {
                this.player.setVelocityX(110);
               // this.player.play('right',true)
                this.player.play('netural',true)
            }

            if (this.keyboard.UP.isDown === true) {
                this.player.setVelocityY(-110);
                this.player.play('netural',true)
                
            }

            if (this.keyboard.DOWN.isDown === true) {
                this.player.setVelocityY(110);
                this.player.play('netural',true)
            }

            if (this.keyboard.LEFT.isDown === true) {
                this.player.setVelocityX(-110);
                //this.player.play('left',true)
                this.player.play('netural',true)
            }
            if (this.keyboard.LEFT.isUp && this.keyboard.RIGHT.isUp) { //not moving on X axis
                this.player.setVelocityX(0);
                this.player.play('netural',true)
            }
            if (this.keyboard.UP.isUp && this.keyboard.DOWN.isUp) { //not pressing y movement
                this.player.setVelocityY(0);
                this.player.play('netural',true)
            }
            

    }
}