import { useState, useEffect } from 'react';
import FlashCard from "./FlashCard";
import '../style/CardList.css'
import { Link } from 'react-router-dom'

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
          {/* <Link to="/AddCard" target="_blank">
            <div className="new">
            <p id = "link">Add a new card</p>
            <img src={process.env.PUBLIC_URL + '/plus-sign.png'} alt="plus-sign" />
            </div>
          </Link>
            {flashcard.map((data) => {
                //return <FlashCard flashcard={data} key={data.id}/>
            })} */}
        </div>
    )
}

export default CardList