import React, { useEffect, useState } from 'react';
import game from './game';
import GameOver from './components/GameOver';
import GameBoard from './components/GameBoard';

export default function MemoryGame() {
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
      setCards(game.createCardsFromTechs());
    }, []);

    const handleFlip = (card) => {
      if(game.setCard(card.id)){
        if(game.secundCard){
          if(game.checkMatch()){
            game.clearCards();
            if(game.checkGameOver()){
              setGameOver(true);
            }
          }else{
            setTimeout(() => {
              game.unflipCards();
              setCards([...game.cards]);
            }, 1000);
          }
        }
      }
      setCards([...game.cards]);
    }

    const handleRestart = () => {
      game.clearCards();
      setCards(game.createCardsFromTechs());
      setGameOver(false);
    }

  return (
    <>
    <GameBoard cards={cards} handleFlip={handleFlip}/>
    <GameOver show={gameOver} handleRestart={handleRestart}/>
    </>
  )
}
