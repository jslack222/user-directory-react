import React, {useState} from 'react'; 
import data from './data';

const Card = (props) => {
    

  return (
    <div className="item-card">
      <div className="item-card-left">
        <div className="nameAndNumber">
          <h1 className="Name">{data[props.input].name.first} {data[props.input].name.last}</h1>
          <h1 className="Number">
            {props.input + 1}/{data.length}
          </h1>
        </div>
        <p>
          {" "}
          <span className="bold">From:</span> {data[props.input].city},{" "}
          {data[props.input].country}
        </p>
        <p>
          {" "}
          <span className="bold">Job Title:</span> {data[props.input].title}
        </p>
        <p>
          {" "}
          <span className="bold">Employer:</span> {data[props.input].employer}
        </p>
        <div>
          <p>
            <span className="bold">Favorite Movies:</span>
          </p>
          <ul>
            <li>1. {data[props.input].favoriteMovies[0]}</li>
            <li>2. {data[props.input].favoriteMovies[1]}</li>
            <li>3. {data[props.input].favoriteMovies[2]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card; 