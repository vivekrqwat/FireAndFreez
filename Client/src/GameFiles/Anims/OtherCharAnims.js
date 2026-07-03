export const OtherCharAnims=(anims)=>{
         anims.create({
            key: "qdownwalk",
            frames: anims.generateFrameNumbers("queen", { start: 0, end: 2 }),
            frameRate: 8,
            repeat: -1
        });

        anims.create({
            key: "wwalk",
            frames: anims.generateFrameNumbers("wizard", { start: 40, end: 43 }),
            frameRate: 3 ,
            repeat: -1
        });
        anims.create({
            key: "dfdownwalk",
            frames: anims.generateFrameNumbers("drawf", { start: 0, end: 2 }),
            frameRate: 8,
            repeat: -1
        });
}