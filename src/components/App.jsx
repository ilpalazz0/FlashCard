import ReactDOM from "react-dom"; 
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Header from "./Header";
import Home from "./Home";
import Main from "./Main";
import Contact from "./Contact";
import AddCard from "./Card Modification/AddCard";
import EditCard from "./Card Modification/EditCard";

const App = () => {   
    return ( 

    <BrowserRouter> 
    <div id="App">
        <Header /> 
        <Routes path="/">
            <Route index element = {<Home/>}/>
            <Route path ="/home" element = {<Home/>}/>
            <Route path ="/main" element = {<Main/>}/>
            <Route path ="/contact" element = {<Contact/>}/>
            <Route path ="/addcard" element = {<AddCard/>}/>
            <Route path="/editcard" element ={<EditCard/>}/>
        </Routes>
    </div>
    </BrowserRouter>  
    ); 
}

export default App;
