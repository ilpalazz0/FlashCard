import { useState, useEffect } from "react";
import axios from "axios";
import '../../style/EditCard.css'

const EditCard = () => {

    let id_location = window.location.href;
    let id = id_location.substring(id_location.indexOf("=")+1, id_location.length);

    const today = new Date();

    let moddate=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear() + " at " + parseInt(today.getHours()) + ":" + parseInt(today.getMinutes());

    const [data, setData] = useState({
        id: id,
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

    useEffect(() => {
        axios.get(`http://localhost:8000/flashcard/${id}`)
        .then(res => {
            setData({...data, question: res.data.question, answer: res.data.answer})
        })
        .catch(error => console.log(error))
    }, [])

    const sendCard = (e) => {

        e.preventDefault();
        axios.put(`http://localhost:8000/flashcard/${id}`, data)

    }

    

    return (
        <div className="add-card">
            <form onSubmit={(e) => sendCard(e)}>
                <label for="question">New question:</label><br/>
                <input id="question" value={data.question} onChange={(e)=>Handle(e)} type="text"/><br/>
                <label for="answer">New answer:</label><br/>
                <input id="answer" value={data.answer} onChange={(e)=>Handle(e)} type="text"/><br/>
                <input id="submit-card" type="submit"/><br/>
            </form>
        </div>
    )
}

export default EditCard