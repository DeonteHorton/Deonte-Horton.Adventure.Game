/**@type {import("../type/phaser")} */

import {BootScene} from './BootScene'
import { MenuScene } from './MenuScene';
import {PlayScene} from './PlayScene'
import{Loader} from './Loader'
//import { Scale } from 'phaser';


let game = new Phaser.Game({
    width:window.innerWidth,
    height:window.innerHeight,
    backgroundColor: 0x252538 ,
    scene:[
        BootScene,MenuScene,PlayScene,Loader
    ],
    render:{
        pixelArt:true
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH
    }
        
    
});



