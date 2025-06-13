import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div>
        <section>
          <h2> {props.data.word}</h2>
          <br />
          <h3>Pronunciation: /{props.data.phonetic}/</h3>
          <br />
        </section>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
