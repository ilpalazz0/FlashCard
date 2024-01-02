import { useState, useEffect } from 'react';
import '../style/FlashCard.css'

const FlashCard = ({flashcard}) => {

  const [Flip, setFlip] = useState(false);

  const flipCard = () => {
    setFlip(!Flip);
  }

  return (
    <div className={`card ${Flip ? 'flip' : ''}`} onClick={() => setFlip(!Flip)}>
      <div className="front">
        {flashcard.question}
      </div>
      <div className="back">
        {flashcard.answer}
      </div> 
    </div>
  )
  
}

export default FlashCard