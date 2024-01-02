import React, {useState} from 'react'

const ChangeSeason = (props) => {


  // season
  function getSeason(month) {
    if (month >= 3 && month <= 5) {
      return "spring";
    } else if (month >= 6 && month <= 8) {
      return "summer";
    } else if (month >= 9 && month <= 11) {
      return "autumn";
    } else {
      return "winter";
    }
  }

  const seasonColors = {
    spring: "green",
    summer: "yellow",
    autumn: "orange",
    winter: "lightblue",
  };

  const date = new Date();
  const month = date.getMonth();
  const season = getSeason(month);

  const backgroundColor = seasonColors[season];

  const BackgroundStyle = {
    background: backgroundColor
  }


  // time of day

  const hour = new Date().getHours();

  let welcome_message;

  if (hour >= 6 && hour < 12) {
    
    welcome_message = 'Good morning!';
  } else if (hour >= 12 && hour < 18) {
    
    welcome_message = 'Good afternoon!';
  } else if (hour >=18 && hour < 24){
    
    welcome_message = 'Good evening!';
  }

  document.body.style.backgroundColor = backgroundColor

  //

  return (

    <div> {welcome_message}
    <br></br>
    Current season is {season}.</div>


  )
}

export default ChangeSeason
