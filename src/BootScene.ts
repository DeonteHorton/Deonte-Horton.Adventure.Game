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
          // Preloads images before the game runs
         this.load.image("Menu", "./assets/image/Menu.jpg") 
         this.load.image("playB", "./assets/image/playB.png")

        this.load.audio('theme', './assets/audio/final_bell.mp3')

        this.load.atlas('knight', './assets/sprites/knight.png','./assets/sprites/knight_atlas.json' )
 
      }
      create(){
        this.scene.start(CST.Scence.Menu)
      }
}