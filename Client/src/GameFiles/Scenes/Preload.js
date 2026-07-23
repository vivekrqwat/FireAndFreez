import { MAinCharAnims } from "../Anims/MainCharAnims";
import backgroundImage from "../resources/background/image.png";
import playerSprite from "../resources/MainChar/char2.png";
import wizard from "../resources/MainChar/wizard.png";
import drawf from "../resources/MainChar/drawf.png";
import queen from "../resources/MainChar/queen.png";
import Phaser from "phaser";
import { CreatePlayer } from "../Character/CharcterCreate";
import { MovingAction } from "../Anims/MovingAnimsofChar/MovingAction";
import { OtherCharAnims } from "../Anims/OtherCharAnims";
import player2 from "../resources/MainChar/player.png";
import plancer from "../resources/MainChar/plancer.png";
import { Movinfg2char } from "../Anims/seconCharAnim/MOvingsecondChar";
import { MovingSoldier } from "../Anims/Soldier/MovingSoldier";

export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload');
        console.log("preload called");
        this.player={}
    }

    preload() {
        console.log("preload");
        this.load.image("background", backgroundImage);
        this.load.spritesheet("player", player2, {
            frameWidth: 32,
            frameHeight: 32
        });
          this.load.spritesheet("queen", queen, {
            frameWidth: 56,
            frameHeight: 92
        });
          this.load.spritesheet("wizard", wizard, {
            frameWidth: 56,
            frameHeight: 92
        });
         this.load.spritesheet("drawf", drawf, {
            frameWidth: 56,
            frameHeight: 92
        });
        this.load.spritesheet("2char",player2,{
            frameWidth: 32,
            frameHeight: 32
        })

         this.load.spritesheet("plancer",plancer,{
            frameWidth: 17,
            frameHeight: 192
        })
        
        // Map loading
        this.load.tilemapTiledJSON('map', './Maps/Map1/Huntinground.json');
        this.load.image("test1","./Maps/Map1/spritesheet.png");
    }

    create() {
        console.log("create called");
        // this.add.image(400, 300, "background").setScale(1.5);
        // //Menu
        // this.add.text(400, 300, "FireAndFreez", { fontSize: "32px", fill: "#fff" }).setOrigin(0.5);
        // let playButton=this .add.text(400,350,"startGAme",{ fontSize: "32px", fill: "#fff" }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        // playButton.on('pointerover', () => {
        //     playButton.setStyle({ fill: '#ff0' }); // Change color to yellow on hover
        // });
        // playButton.on('pointerdown', () => {
        //     this.scene.start('GameScene1'); // Switches to your gameplay scene
        // });
        //  playButton.on('pointerout', () => {
        //     playButton.setStyle({ fill: '#0f0' }); // Change back to green
        // });


        // MAinCharAnims(this.anims);
        OtherCharAnims(this.anims);
                 this.cursor = this.input.keyboard.createCursorKeys();

   
         this.queen=CreatePlayer(300,500,this,"queen")
         this.wizard=CreatePlayer(200,500,this,"wizard")
        //  this.drawf=CreatePlayer(500,500,this,"drawf")
        //  this.player2=CreatePlayer(100,500,this,"plancer").setScale(2.5)
        // this.plancer= CreatePlayer(500,500,this,"plancer").setScale(0.5)
        console.log("plancer",this.plancer)
        MovingSoldier(this.anims,"player")
    //   this.plancer.anims.play("plancer_idle")
      this.queen.anims.play("qdownwalk")
        // this.drawf.anims.play("dfdownwalk")
        this.wizard.anims.play("wwalk")
        this.scene.start('GameScene1')

        
    }

    update(){
        // MovingAction(this.player,this.cursor)
    }
}
