import Phaser from "phaser";
import { MovingAction } from "../Anims/MovingAnimsofChar/MovingAction";
import { MAinCharAnims } from "../Anims/MainCharAnims";
import { CreatePlayer } from "../Character/CharcterCreate";
import tileset from "../MAps/Map1/spritesheet.png";
export class GameScene1 extends Phaser.Scene {
    constructor() {
        super('GameScene1');
        this.player={}
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
        MAinCharAnims(this.anims,"player");
          this.cursor = this.input.keyboard.createCursorKeys();
         this.player= CreatePlayer(1700,1700,this,"player");
         this.player.setScale(0.5)
          const mapWidth = this.map.widthInPixels;
        const mapHeight = this.map.heightInPixels;
          this.physics.world.setBounds(0, 0, mapWidth, mapHeight);
          this.cameras.main.startFollow(this.player, true, 0.08, 0.08);

    }
    update(){
        MovingAction(this.player,this.cursor)

    }






}