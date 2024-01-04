import React from 'react'
import "../style/Home.css"

const Home = () => {

    return (
        <div id = "body">
            <div id="intro">
                <h3>Welcome!</h3>
                <p>This is my flashcards website project developed as a part of university assignment. It is aimed 
                    to provide a flashcard app with user-friendly UI allowing you to create, edit, or find simple Question-Answer flashcards. 
                    To access the app, navigate to Flashcards page from navigation bar on top. 
                </p>
            </div>
            <div id="projects">
                <p>Here you can find other projects developed by me:</p>
                <ul>
                    <li><a target = "_blank" href="https://github.com/ilpalazz0/ACR0SS">Personal Webpage</a></li>
                    <li><a target = "_blank" href="https://github.com/ilpalazz0/Products">Products App</a></li>
                    <li><a target = "_blank" href="https://github.com/ilpalazz0/Bookstore">Bookstore Database</a></li>
                </ul>
            </div>
        </div>
    )

}

export default Home;