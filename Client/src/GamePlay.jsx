import React, { useEffect } from 'react'
import Phaser from "phaser";
import config from './GameFiles/Main';




export default function GamePlay() {
    const gameRef = React.useRef(null);
     useEffect(() => {
    const game = new Phaser.Game(config);
    gameRef.current=game

    return () => {
      game.destroy(true);
        gameRef.current = null;
    };
  }, []);
  return (
    <div width="50%" height="100%">
        heello
    </div>
  )
}
