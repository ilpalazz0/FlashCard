import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FlashCard from "./FlashCard";
import "../style/SearchCards.css";

export const SearchCards = () => {


  useEffect(() => {
    fetchData('')
  }, [])

  const [input, setInput] = useState("");

  const [info, setInfo] = useState([]);

  let array = info;

  const fetchData = (value) => {
    fetch("http://localhost:8000/flashcard")
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((flashcard) => {
          return (
            flashcard.question.toLowerCase().includes(value)
            ||
            flashcard.answer.toLowerCase().includes(value)
          );
        });
      setInfo(results)
      });
  };
  
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }

  const handleFilter = () => {
    
    console.log(array)
    var activeFilter = document.querySelector("#filter-value").value;
    if(activeFilter != "All")
      array.forEach(hide => {
        if(hide.status != activeFilter) document.getElementById(`${hide.id}`).style.display="none";
        else document.getElementById(`${hide.id}`).style.display="inline-flex";
    })
    else {
      array.forEach(hide => {
        document.getElementById(`${hide.id}`).style.display="inline-flex";
      })
    }
  }

  return (
    <div id="main-list">
      <div className="filter">
          <select id="filter-value" onChange={handleFilter}>
            <option id="hidden" value='None' selected>Filter by</option>
            <option value="All">Show all</option>
            <option value="Learned">Learned</option>
            <option value="Want to Learn">Want to Learn</option>
            <option value="Noted">Noted</option>
          </select>
      </div>
      <div className="search-bar">
        <input value={input} onChange={(e) => handleChange(e.target.value)} id="input-search" type="text" placeholder='Search for a card...'/>
      </div>
      <Link to="/AddCard" target="_blank">
        <div className="new">
          <p id = "link">Add a new card</p>
          <img src={process.env.PUBLIC_URL + '/plus-sign.png'} alt="plus-sign" />
        </div>
      </Link>
      {info.map((data) => {
        return <FlashCard flashcard={data} key={data.id}/>
      })}
    </div>
  );
};

export default SearchCards