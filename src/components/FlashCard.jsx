import { useState } from 'react';
import '../style/FlashCard.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const FlashCard = ({flashcard}) => {


  const today = new Date();
  let moddate=today.getDate() + "/"+ parseInt(today.getMonth()+1) 
  +"/"+today.getFullYear() + " at " + parseInt(today.getHours()) 
  + ":" + parseInt(today.getMinutes());

  const [Flip, setFlip] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

  const showEdit = () => {
    setIsHovering(true);
  }

  const hideEdit = () => {
    setIsHovering(false);
  }

  const handleDelete = () => {
    console.log(flashcard.id)
    fetch(`http://localhost:8000/flashcard/${flashcard.id}`, { method: "DELETE" })
  }

  const handleStatus = () => {

    const newStatus = (document.querySelector('#status').value);

    console.log(newStatus)

    axios.put(`http://localhost:8000/flashcard/${flashcard.id}`,
    {
      id: flashcard.id,
      question: flashcard.question,
      answer: flashcard.answer,
      date: moddate,
      status: newStatus
    })

    window.location.reload(false);

  }

  return (
    <div id={flashcard.id} className="card-body" onMouseOver={showEdit} onMouseOut={hideEdit}>
      <div className={`card ${Flip ? 'flip' : ''}`} onClick={() => setFlip(!Flip)}>
        <div className="front">
          {flashcard.question}
        </div>
        <div className="back">
          {flashcard.answer}
        </div>
      </div>
      {isHovering && 
      <div className="edit">
        <div className="status-list">
          <p>Current status: {flashcard.status}</p>
          <select id="status" onChange={handleStatus}>
            <option id="hidden" value='None'></option>
            <option value="Learned">Learned</option>
            <option value="Want to Learn">Want to Learn</option>
            <option value="Noted">Noted</option>
          </select>
        </div>
        <Link to={`/EditCard?id=${flashcard.id}`} target="_blank">
          <button id="edit-button">Edit</button>
        </Link>
          <button onClick={handleDelete} id="delete-button">Delete</button>
        <div className="date-modified">
          <p>Last modified: {flashcard.date}</p>
        </div>
      </div>
      }
    </div>

  )
}

export default FlashCard