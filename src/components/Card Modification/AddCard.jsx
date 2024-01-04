import { useState } from "react";
import '../../style/AddCard.css'

const AddCard = () => {
 
    const today = new Date();

    let moddate=today.getDate() + "/"+ parseInt(today.getMonth()+1) 
    +"/"+today.getFullYear() + " at " + parseInt(today.getHours()) 
    + ":" + parseInt(today.getMinutes());

    console.log(moddate)
    const [data, setData] = useState({
        question: "",
        answer: "",
        date: moddate

    })
    
    const Handle = (e) => {
        const newData={...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData)
    }

    const sendCard = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/flashcard', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        })
        .then(res => [
            console.log(res.data)
        ])
  
    }
    return (
        <div className="add-card">
            <form onSubmit={(e) => sendCard(e)}>
                <label for="question">Enter your question:</label><br/>
                <input onChange={(e)=>Handle(e)} id="question" value={data.question} type="text"/><br/>
                <label for="answer">Enter your answer:</label><br/>
                <input onChange={(e)=>Handle(e)} id="answer" value={data.answer} type="text"/><br/>
                <input type="submit"/><br/>
            </form>
        </div>
    )
}

export default AddCard