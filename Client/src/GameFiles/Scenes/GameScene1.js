import Phaser from "phaser";
import { MovingAction, MOvinWizardAndChar } from "../Anims/MovingAnimsofChar/MovingAction";
import { MAinCharAnims } from "../Anims/MainCharAnims";
import { CreatePlayer } from "../Character/CharcterCreate";
import tileset from "../MAps/Map1/spritesheet.png";
import { OtherCharAnims } from "../Anims/OtherCharAnims";
import { Message } from "../Messasge/Message";
export class GameScene1 extends Phaser.Scene {
    constructor() {
        super('GameScene1');
        this.player={}
        this.wizard1={}
        console.log("GameScene1 called");
    }

    create(){
        this.map=this.make.tilemap({ key: 'map' });
        const tileset=this.map.addTilesetImage("test1","test1");
        this.groundLayer=this.map.createLayer("ground",tileset,0,0);
                this.groundLayer2=this.map.createLayer("ground2",tileset,0,0);
                           this.groundLayer3=this.map.createLayer("ground3",tileset,0,0);
                           this.cloudLayer=this.map.createLayer("cloud",tileset,0,0);
                this.forest=this.map.createLayer("forest",tileset,0,0);
                this.forest2=this.map.createLayer("forest2",tileset,0,0);

                                this.forest3=this.map.createLayer("forest3",tileset,0,0);
        // MAinCharAnims(this.anims,"player");
      this.msg=new Message(this, 400, 500, 600, 120);
      this.isTalking=false;
     
          this.cursor = this.input.keyboard.createCursorKeys();
         this.player= CreatePlayer(1800,1900,this,"player").setScale(1.75);
         this.wizard1=CreatePlayer(1800,1800,this,"wizard").setScale(0.75)
           this.wizard1.anims.play("wwalk")
                this.A= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.player.setBodySize(24, 24);
    this.wizard1.setImmovable(true);
    this.showMessage=false;
    this.physics.add.collider(this.player,this.wizard1,()=>{
      
        MOvinWizardAndChar(this);

    })

  
               
        
          
      

       
          const mapWidth = this.map.widthInPixels;
        const mapHeight = this.map.heightInPixels;
          this.physics.world.setBounds(0, 0, mapWidth, mapHeight);
          this.cameras.main.startFollow(this.player, true, 0.08, 0.08);


    }
    update(){
        MovingAction(this.player,this.cursor,this,this.A)
        // MOvinWizardAndChar(this.cursor,this.player,this.wizard1,this)
  if (this.wizard1.body.touching.none) {
        console.log("notouch")
    this.wizard1.anims.play("wwalk", true);
    this.msg.hideMessage();
    
    
    
}





    }






}