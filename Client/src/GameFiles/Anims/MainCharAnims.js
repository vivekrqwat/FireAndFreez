export const MAinCharAnims=(anims,name)=>{
    console.log("MAinCharAnims called",name)
      anims.create({
            key: "pdownwalk",
            frames: anims.generateFrameNumbers(name, { start: 0, end: 2 }),
            frameRate: 8,
            repeat: -1
        });

         anims.create({
            key: "pwalkright",
            frames: anims.generateFrameNumbers(name, { start: 9, end: 10 }),
            frameRate: 8,
            repeat: -1
        });
          anims.create({
            key: "pwalkleft",
            frames: anims.generateFrameNumbers(name, {frame:[]}),
            frameRate: 8,
            repeat: -1
        });   

         anims.create({
            key: "pupwalk",
            frames: anims.generateFrameNumbers(name, { start: 4, end: 5 }),
            frameRate: 8,
            repeat: -1
        });
        anims.create({
    key: "pidle",
    frames: anims.generateFrameNumbers(name, {
        frames: [36]
    }),
    frameRate: 1,
    repeat: -1
});


}