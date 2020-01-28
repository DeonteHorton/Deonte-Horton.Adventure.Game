import { CST } from "./CST";
export class BootScene extends Phaser.Scene{
    constructor(){
        super({
            key:CST.Scence.Boot
        })

    }
      init(){

      }
      preload(){
         this.load.image("Menu", "./assets/image/Menu.jpg") 
         this.load.image("playB", "./assets/image/playB.png")

        this.load.audio('theme', './assets/audio/final_bell.mp3')

        this.load.atlas('knight', './assets/sprites/knight.png','./assets/sprites/knight_atlas.json' )
         
        
            // this.load.on('load', (File:Phaser.Loader.File) =>{
            //     console.log(File);
                
            // })

      }
      create(){
          //@ts-ignore
        this.scene.start(CST.Scence.Menu, "sent")
      }
}