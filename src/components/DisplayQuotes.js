import React from "react";

function DisplayQuotes(props) {
  return (
    <div className="DisplayQuotes">
      <img src={props.quote.image} alt={props.quote.character} />
      <ul>
        <li>Character: {props.quote.character}</li>
        <li>Quote: {props.quote.quote}</li>
      </ul>
    </div>
  );
}

export default DisplayQuotes;
