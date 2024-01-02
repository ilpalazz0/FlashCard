import "../style/NavBar.css" 
function NavBar() {   
    return ( 
    <div id="navbar">  
        <img src={process.env.PUBLIC_URL + '/note-icon.png'} alt="logo" /> 
        <ul id="nav">
            <li><a href="http://localhost:3000/Home">Home</a></li>
            <li><a href="http://localhost:3000/Main">Flashcards</a></li>
            <li><a href="http://localhost:3000/Contact">Contact</a></li>
        </ul>   
    </div>  
    ) 
} 

export default NavBar;