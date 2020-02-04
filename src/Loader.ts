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
        
        //Creates the bar going across the screen
        let loadingBar = this.add.graphics({
            fillStyle :{
                color:0xa60000
            }
            })
            // for loop allows loader to load instead of it instantly starting the play scene
            for (let i = 0; i < 250; i++) {
                this.load.spritesheet('hero'+ i, './assets/sprites/knight1.png',{
                    frameWidth:54,
                    frameHeight:54,
                    })
                
            }
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;

            //creating the text above the loading bar
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

                //Displays the controls
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

            //Creates a Static 0
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
            
            //Allows the static 0 to display the current percent of the loading bar
            //@ts-ignore
            this.load.on('progress', function (value) {
                //@ts-ignore
                percentText.setText(parseInt(value * 100) + '%');
             
            });

            // when loading completes, loading and text bar is destroyed
            this.load.on('complete', ()=>{
                loadingBar.destroy();
                percentText.destroy();
            })            
    }

    create(){
        this.scene.start(CST.Scence.Play)
    }
}