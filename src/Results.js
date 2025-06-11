import React from "react";

export default function Results(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div>
        <h2>{props.data.word}</h2>
        {props.data.map(function (meaning, index) {
          return meaning.meanings[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
