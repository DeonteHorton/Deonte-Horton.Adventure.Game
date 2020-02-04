// menu scene
import { CST } from "./CST";
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key:CST.Scence.Menu
        })

    }

        init(){
            
        }

        create(){

            var width = this.cameras.main.width;
            var height = this.cameras.main.height;

            //Displays the name of the game
            var loadingText = this.make.text({
                x: width / 2,
                y: height * 0.20,
                text: 'Dungeon 0',
                style: {
                    font: '64px monospace',
                    fill: '#ffffff',
                }
                
            });
            loadingText.setOrigin(0.5, 0.5).setDepth(2);

            //Adds the Menu image and the play button image
            let playB = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 , "playB").setDepth(1)
            this.add.image(-200,-200,"Menu").setOrigin(0)

            // Allows the play button to be interactive
            playB.setInteractive();

            playB.on('pointerover',() =>{
                playB.setScale(1.15)
            })

            playB.on('pointerout',() =>{
                playB.setScale(1)
            })
            playB.on('pointerdown', () =>{
                // when the play button is clicked, it starts the loader and plays music
                this.scene.start(CST.Scence.Loader)
                this.sound.pauseOnBlur = false;
                this.sound.play('theme',{
                    loop:true,
                    volume:0.45
                    
                })
            })
        }
}