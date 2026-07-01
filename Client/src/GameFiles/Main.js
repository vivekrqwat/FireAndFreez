 import Phaser from 'phaser';
 import PreLoad from './scenes/Preload';
 const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: [PreLoad],
        
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        }
    };

    export default config;
