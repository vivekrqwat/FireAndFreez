import Phaser from "phaser";
export class Message extends Phaser.GameObjects.Container{
    constructor(scene,x,y,width,height){
        super(scene,x,y)
        this.bg = scene.add.rectangle(0, 0, width, height, 0x222222)
            .setStrokeStyle(4, 0xffffff)
            .setOrigin(0.5);
        this.text = scene.add.text(-width / 2 + 20, -height / 2 + 20, '', {
            fontSize: '18px',
            fill: '#ffffff',
            wordWrap: { width: width - 40 }
        }).setOrigin(0);

        this.add([this.bg, this.text]);
        this.setVisible(false);
         this.setScrollFactor(0);
         scene.add.existing(this);

        
    }
      showMessage(messageText) {
        this.text.setText(messageText);
        this.setVisible(true);
    }
      hideMessage() {
        console.log("hise")
        this.setVisible(false);
    }
}