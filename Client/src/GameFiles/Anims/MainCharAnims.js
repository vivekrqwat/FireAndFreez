export const MAinCharAnims=(anims)=>{
      anims.create({
            key: "pdownwalk",
            frames: anims.generateFrameNumbers("player", { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        });

         anims.create({
            key: "pwalkright",
            frames: anims.generateFrameNumbers("player", { start: 9, end: 10 }),
            frameRate: 8,
            repeat: -1
        });
          anims.create({
            key: "pwalkleft",
            frames: anims.generateFrameNumbers("player", {frame:[]}),
            frameRate: 8,
            repeat: -1
        });   

         anims.create({
            key: "pupwalk",
            frames: anims.generateFrameNumbers("player", { start: 4, end: 5 }),
            frameRate: 8,
            repeat: -1
        });
        anims.create({
    key: "pidle",
    frames: anims.generateFrameNumbers("player", {
        frames: [36]
    }),
    frameRate: 1,
    repeat: -1
});


}