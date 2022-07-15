import React from "react";
import data from "./data";
import Error from "./error"


const alertYou = () => {
    alert("this works");
}

const Buttons = (props) => {
    const nextUser = () => {
        if (props.input !== data.length - 1) {
             return props.setInput(props.input + 1)
        }
        return alert('no more users')
    }
    const previousUser = () => {
            if (props.input !== 0) {
            return props.setInput(props.input - 1)
        }
        const firstElement = () => {
            return (
                <Error></Error>
            )
            
        }
        return firstElement();
    }
    return (
    
      <div className="button-container">
            <button onClick={() => previousUser()} className="previous-btn">{"<"} Previous</button>
        <div className="edit">
          <button className="edit-btn">Edit</button>
          <button className="edit-btn">Delete</button>
          <button className="edit-btn">New</button>
        </div>
            <button onClick={() => nextUser() } className="next-btn">Next {">"}</button>
      </div>

  );
};

export default Buttons;
