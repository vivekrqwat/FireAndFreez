 export const CreatePlayer=(x,y,scene,name)=>{
   console.log("CreatePlayer called",name)
   const sprite = scene.physics.add.sprite(x,y,name)
   sprite.setCollideWorldBounds(true);
   return sprite
}