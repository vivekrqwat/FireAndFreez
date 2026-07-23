 import Phaser from 'phaser';
 import PreLoad from './scenes/Preload';
import { GameScene1 } from './Scenes/GameScene1';
 const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: [PreLoad,GameScene1],
        
        
        physics: {
            default: 'arcade',
            arcade: {
                 debug: true ,
               
            }
        }
    };

    export default config;
