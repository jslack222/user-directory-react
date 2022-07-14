import React from 'react'; 

const Card = () => {
    return (
      <div className="item-card">
        <div className="item-card-left">
          <h1>Marion Santori</h1>
          <p>
            {" "}
            <span className="bold">From:</span> Liverpool, United Kingdom
          </p>
          <p>
            {" "}
            <span className="bold">Job Title:</span> Research Associate
          </p>
          <p>
            {" "}
            <span className="bold">Employer:</span> Skinix
          </p>
          <div>
            <p>
              <span className="bold">Favorite Movies:</span>
            </p>
            <ul>
              <li>1. Fathom</li>
              <li>2. Strange Magic</li>
              <li>3. Maritan Child</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Card; 