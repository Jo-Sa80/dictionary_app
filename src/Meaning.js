import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          <strong>Definition:</strong> {props.meaning.definition}
        </p>
        <Example example={props.meaning.example} />

        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
