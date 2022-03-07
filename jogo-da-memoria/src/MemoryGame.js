import React, { useEffect, useState } from 'react';
import game from './game';
import GameOver from './components/GameOver';
import GameBoard from './components/GameBoard';

export default function MemoryGame() {
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
      setCards(game.createCardsFromTechs());
    }, [])

    const handleRestart = () => {
        setGameOver(false);
    }

  return (
    <>
    <GameBoard cards={cards}/>
    <GameOver show={gameOver} handleRestart={handleRestart}/>
    </>
  )
}
