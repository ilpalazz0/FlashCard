import React, { useState } from 'react';
import "../style/Contact.css";

const Contact = () => {
    

    const URL = "";
    const [data, setData] = useState({
        address: "",
        subject: "",
        message: ""
    })
    
    const Handle = (e) => {
        const newData={...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData)
    }

    const sendMail = (e) => {
        e.preventDefault();
        fetch('http://localhost:8001/messages', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                address: data.address,
                subject: data.subject,
                message: data.message
                }
            )
        })
        .then(res => [
            console.log(res.data)
        ])
    }
    
    return (
        <div id="contact">
            <div id = "mail">
                <p>Send me an email:</p>
                <form onSubmit={(e) => sendMail(e)}>
                    <label for="message">Email address:</label><br/>
                    <input onChange={(e)=>Handle(e)} id="address" value={data.address} type="text"/><br/>
                    <label for="subject">Enter subject:</label><br/>
                    <input onChange={(e)=>Handle(e)} id="subject" value={data.subject} type="text"/><br/>
                    <label for="message">Your message:</label><br/>
                    <textarea onChange={(e)=>Handle(e)} id="message" value={data.message}></textarea>
                    <input id="submit-message" type="submit"/><br/>
                </form>
            </div>
            <div id = "optional">
            <ul>
                <li><a href="mailto:someone@example.com" target="_blank"><img src={process.env.PUBLIC_URL + '/mail.png'}/><p>ilpalazz0@gmail.com</p></a></li>
                <li><a><img src={process.env.PUBLIC_URL + '/phone.png'}/><p>+994661234567</p></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><img src={process.env.PUBLIC_URL + '/inst.png'}/><p>@ilpalazzo</p></a></li>
                <li><a href="https://github.com/ilpalazz0" target="_blank"><img src={process.env.PUBLIC_URL + '/git.png'}/><p>ilpalazz0</p></a></li>
                <li><a href="https://www.facebook.com/" target="_blank"><img src={process.env.PUBLIC_URL + '/facebook.png'}/><p>Il Palazzo</p></a></li>
            </ul>
            </div>
        </div>
    )

}

export default Contact