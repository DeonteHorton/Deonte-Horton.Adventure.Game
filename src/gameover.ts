import {CST} from './CST'
export class Gameover extends Phaser.Scene{
    constructor(){
        super({
            key:CST.Scence.Gameover
        })
    }
    preload(){
        let loadingBar = this.add.graphics()
            
            for (let i = 0; i < 150; i++) {
                this.load.spritesheet('hero'+ i, './assets/sprites/hero.png',{
                    frameWidth:54,
                    frameHeight:54,
                    })
                
            }
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            //@ts-ignore
            this.load.on("progress", ()=>{
                var loadingText = this.make.text({
                    x: width / 2,
                    y: height / 2 - 50,
                    text: 'GAME OVER',
                    style: {
                        font: '108px monospace',
                        fill: '#ffffff'
                    }
                });
                loadingText.setOrigin(0.5, 0.5);
               
               
                
            })
            
            this.load.on('complete', ()=>{
                loadingBar.destroy(true);                
            })
    }
    create(){
        this.scene.start(CST.Scence.Menu)
    }
}