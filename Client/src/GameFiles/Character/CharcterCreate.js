 export const CreatePlayer=(x,y,scene,name)=>{
           scene.player= scene.physics.add.sprite(x,y,name)
           scene.player.setCollideWorldBounds(true); 
           return scene.player
        }