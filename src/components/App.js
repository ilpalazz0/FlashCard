import ReactDOM from "react-dom"; 
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Header from "./Header";
import Home from "./Home";
import Main from "./Main";
import Contact from "./Contact";

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
        </Routes>
    </div>
    </BrowserRouter>  
    ); 
}

export default App;
