export const MovingAction=(player,cursor)=>{
          if(!player||!cursor){return;}
        let ismoving=false;
        if(cursor.down.isDown){
            player.setVelocityY(100)
            player.anims.play("pdownwalk",true)
            ismoving=true;
        }
        else if(cursor.up.isDown){
            player.setVelocityY(-100)
            
            player.anims.play("pupwalk",true)
             ismoving=true;
        }
         
      if (cursor.right.isDown) {
        ismoving=true;
    player.setVelocityX(100);
  player.flipX=false;
    player.anims.play("pwalkright", true);
}
else if (cursor.left.isDown) {
    ismoving=true;
    player.flipX=true;
    player.setVelocityX(-100);
  
    player.anims.play("pwalkright", true);
}
        
        if(!ismoving){
            player.setVelocityX(0)
            player.setVelocityY(0)
           player.anims.play("pidle",true)
        }

    }
