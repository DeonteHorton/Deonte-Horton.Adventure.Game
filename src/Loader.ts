import{CST} from './CST'
export class Loader extends Phaser.Scene{
    constructor(){
        super({
            key:CST.Scence.Loader
        })

    }
    init(){

    }
    preload(){
        let loadingBar = this.add.graphics({
            fillStyle :{
                color:0xa60000
            }
            })
            
            for (let i = 0; i < 300; i++) {
                this.load.spritesheet('hero'+ i, './assets/sprites/hero.png',{
                    frameWidth:54,
                    frameHeight:54,
                    })
                
            }
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            //@ts-ignore
            this.load.on("progress", (percent)=>{
                var loadingText = this.make.text({
                    x: width / 2,
                    y: height / 2 - 50,
                    text: 'Loading...',
                    style: {
                        font: '20px monospace',
                        fill: '#ffffff'
                    }
                });
                loadingText.setOrigin(0.5, 0.5);
                loadingBar.fillRect(0, this.game.renderer.height / 2 + 50, this.game.renderer.width * percent ,50)

                var controls = this.make.text({
                    x: width / 2,
                    y: height / 2 + 150 ,
                    text: 'Press LEFT,RIGHT,UP,DOWN to move and avoid the monsters',
                    style: {
                        font: '48px monospace',
                        fill: '#ffffff'
                    }
                })
                controls.setOrigin(0.5, 0.5);
                
            })

            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            //@ts-ignore
            this.load.on('progress', function (value) {
                //@ts-ignore
                percentText.setText(parseInt(value * 100) + '%');
             
            });

            
            this.load.on('complete', ()=>{
                loadingBar.destroy();
                percentText.destroy();
                
                
                
            })            
    }

    create(){
        this.scene.start(CST.Scence.Play)
    }
}