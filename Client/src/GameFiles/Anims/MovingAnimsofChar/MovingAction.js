import Phaser from "phaser";
import { Message } from "../../Messasge/Message";
export const MovingAction=(player,cursor,secne,keyA)=>{

          if(!player||!cursor){return;}
        let ismoving=false;
       let A= secne.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        if(cursor.down.isDown){
            player.setVelocityY(100)
             if(keyA.isDown){
        
         player.anims.play("pattackdown", true);
    }else
            player.anims.play("pdownwalk",true)
            ismoving=true;
        }
        else if(cursor.up.isDown){
            player.setVelocityY(-100)
             if(keyA.isDown){
        
         player.anims.play("pattackup", true);
    }else
            
    player.anims.play("pupwalk",true)
             ismoving=true;
        }
         
      if (cursor.right.isDown) {
        ismoving=true;
    player.setVelocityX(100);
  player.flipX=false;
  if(keyA.isDown){
        
         player.anims.play("pattackright", true);
    }else
    player.anims.play("pwalkright", true);
}
else if (cursor.left.isDown) {
    ismoving=true;
    player.flipX=true;
    player.setVelocityX(-100);
  
    if(keyA.isDown){
        
         player.anims.play("pattackright", true);
    }else
    player.anims.play("pwalkright", true);
}

        
        if(!ismoving){
           
            player.setVelocityX(0)
            player.setVelocityY(0)
           player.anims.play("pidle",true)
        }

    }





    //WIZARD AND CAGR MOVING ACTION
    export const MOvinWizardAndChar=(secne)=>{
        let movement=true;
       
     
          
        secne.msg.showMessage("hello traveller....hope you love this world");

     
          
        
         
     
    
            if(secne.cursor.left.isDown){
             
             secne.wizard1.flipX=false;
              secne.wizard1.anims.play("wleft",true)
            }else if(secne.cursor.right.isDown){
               secne.wizard1.flipX=true;
               secne.wizard1.anims.play("wleft",true)
                

            }else if(secne.cursor.up.isDown){
                
                secne.wizard1.anims.play("widle",true)
            }else if(secne.cursor.down.isDown){
                
                secne.wizard1.anims.play("wup",true)

            }
            
    
         

    }
