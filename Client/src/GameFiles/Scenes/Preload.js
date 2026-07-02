import { MAinCharAnims } from "../Anims/MainCharAnims";
import backgroundImage from "../resources/background/image.png";
import playerSprite from "../resources/MainChar/char2.png";
import wizard from "../resources/MainChar/wizard.png";
import drawf from "../resources/MainChar/drawf.png";
import queen from "../resources/MainChar/queen.png";
import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload');
        console.log("preload called");
        this.player={}
    }

    preload() {
        console.log("preload");
        this.load.image("background", backgroundImage);
        this.load.spritesheet("player", playerSprite, {
            frameWidth: 56,
            frameHeight: 92
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
    }

    create() {
        console.log("create called");
        this.add.image(400, 300, "background").setScale(1.5);
        this.add.text(400, 300, "FireAndFreez", { fontSize: "32px", fill: "#fff" }).setOrigin(0.5);

        MAinCharAnims(this.anims);
        this.cursor = this.input.keyboard.createCursorKeys();
          this.anims.create({
            key: "qdownwalk",
            frames: this.anims.generateFrameNumbers("queen", { start: 0, end: 2 }),
            frameRate: 8,
            repeat: -1
        });

          this.anims.create({
            key: "wwalk",
            frames: this.anims.generateFrameNumbers("wizard", { start: 40, end: 43 }),
            frameRate: 3,
            repeat: -1
        });
         this.anims.create({
            key: "dfdownwalk",
            frames: this.anims.generateFrameNumbers("drawf", { start: 13, end: 15 }),
            frameRate: 5,
            repeat: -1
        });
        this.add.sprite(500,500,"drawf").play("dfdownwalk")
        this.add.sprite(300,500,"queen").play("qdownwalk")
         this.add.sprite(200,500,"queen").play("wwalk")
        const player=()=>{
           this.player= this.physics.add.sprite(100,100,"player")
           this.player.setCollideWorldBounds(true); 
        }
        player();
    }

    update(){
        if(!this.player||!this.cursor){return;}
        let ismoving=false;
        if(this.cursor.down.isDown){
            this.player.setVelocityY(100)
            this.player.anims.play("pdownwalk",true)
            ismoving=true;
        }
        else if(this.cursor.up.isDown){
            this.player.setVelocityY(-100)
            
            this.player.anims.play("pupwalk",true)
             ismoving=true;
        }
         
      if (this.cursor.right.isDown) {
        ismoving=true;
    this.player.setVelocityX(100);
  this.player.flipX=false;
    this.player.anims.play("pwalkright", true);
}
else if (this.cursor.left.isDown) {
    ismoving=true;
    this.player.flipX=true;
    this.player.setVelocityX(-100);
  
    this.player.anims.play("pwalkright", true);
}
        
        if(!ismoving){
            this.player.setVelocityX(0)
            this.player.setVelocityY(0)
            this.player.anims.play("pidle",true)
        }

    }
}
