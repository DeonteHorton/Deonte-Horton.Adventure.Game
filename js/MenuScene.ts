// menu scene

import { CST } from "./CST";
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key:CST.Scence.Menu
        })

    }
        //@ts-ignore
        init(data){
            console.log(data);
            console.log('got');
            
            
        }

        create(){
            let playB = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "playB").setDepth(1)
            this.add.image(-200,-200,"Menu").setOrigin(0)


            playB.setInteractive();

            playB.on('pointerover',() =>{
                playB.setScale(1.15)
            })

            playB.on('pointerout',() =>{
                playB.setScale(1)
            })
            playB.on('pointerdown', () =>{
                this.scene.start(CST.Scence.Loader)
                //this.sound.pauseOnBlur = false;
                this.sound.play('theme',{
                    loop:true,
                    volume:0.45
                    
                })
            })
        }
}