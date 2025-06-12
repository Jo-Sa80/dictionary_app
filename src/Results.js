import React from "react";

export default function Results(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div>
        <h2> {props.data.word}</h2>
        <br />
        <h3>Pronunciation: {props.data.phonetic}</h3>
        <br />
        <p>
          {" "}
          Different definitions for {props.data.word} are:
          {props.data.meanings.map(function (meaning, index) {
            return (
              <ul>
                {" "}
                <li key={index}>{meaning.definition}</li>
              </ul>
            );
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
