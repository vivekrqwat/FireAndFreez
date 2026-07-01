import backgroundImage from "../resources/background/image.png";
import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload');
        console.log("preload called");
    }

    preload() {
        console.log("preload");
        this.load.image("background", backgroundImage);
    }

    create() {
        console.log("create called");
        this.add.image(400, 300, "background").scale=1.5;
        this.add.text(400, 300, "FireAndFreez", { fontSize: "32px", fill: "#fff" }).setOrigin(0.5);
    }
}