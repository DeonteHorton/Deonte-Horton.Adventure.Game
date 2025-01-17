// Allows the use of type Script language
/**@type {import("../type/phaser")} */

//Transfer all the data from each scene to this file and stores each scene
import {BootScene} from './BootScene'
import { MenuScene } from './MenuScene';
import {PlayScene} from './PlayScene'
import{Loader} from './Loader'

let game = new Phaser.Game({
    width:window.innerWidth,
    height:window.innerHeight,
    backgroundColor: 0x252538 ,
    scene:[
        BootScene,MenuScene,PlayScene,Loader
    ],
    render:{
        pixelArt:true,
    },
    physics: {
        default: "arcade",
    },
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH
    }

    
});



