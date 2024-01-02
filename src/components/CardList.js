import { useState, useEffect } from 'react';
import FlashCard from "./FlashCard";

const CardList= () => {

    const [flashcard, setFlashcard] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8000/flashcard')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setFlashcard(data);
        });
    }, []);
 
    return (
        <div id="card-list">
            {flashcard.map((data) => {
                return <FlashCard flashcard={data} key={data.id}/>
        })}
        </div>
    )
}

export default CardList