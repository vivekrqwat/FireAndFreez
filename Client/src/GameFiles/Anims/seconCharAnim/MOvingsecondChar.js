export const Movinfg2char=(anims,name)=>{
       anims.create({
            key: "pdownwalk",
            frames: anims.generateFrameNumbers(name, { start: 0, end: 5 }),
            frameRate: 8,
            repeat: -1
        });

         anims.create({
            key: "pwalkright",
            frames: anims.generateFrameNumbers(name, { start: 6, end: 11 }),
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
            frames: anims.generateFrameNumbers(name, { start: 30, end: 35 }),
            frameRate: 8,
            repeat: -1
        });
        anims.create({
    key: "pidle",
    frames: anims.generateFrameNumbers(name, {
        frames: [0]
    }),
    frameRate: 1,
    repeat: -1
});

   anims.create({
    key: "pattackdown",
    frames: anims.generateFrameNumbers(name, {
        start:36,end:39
    }),
    frameRate: 5,
    repeat: -1
});

 anims.create({
    key: "pattackright",
    frames: anims.generateFrameNumbers(name, {
        start:41,end:43
    }),
    frameRate: 5,
    repeat: -1
});

 anims.create({
    key: "pattackup",
    frames: anims.generateFrameNumbers(name, {
        start:49,end:51
    }),
    frameRate: 5,
    repeat: -1
});

anims.create({
    key: "pfaint",
    frames: anims.generateFrameNumbers(name, {
        start:52,end:58
    }),
    frameRate: 5,
    repeat: -1
});


}