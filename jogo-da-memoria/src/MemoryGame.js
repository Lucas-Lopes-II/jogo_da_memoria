import React, { useState } from 'react';
import game from './game';
import GameOver from './components/GameOver';

export default function MemoryGame() {
    const [gameOver, setGameOver] = useState(true);

    const handleRestart = () => {
        setGameOver(false);
    }

  return (
    <>

    <GameOver show={gameOver} handleRestart={handleRestart}/>
    </>
  )
}
