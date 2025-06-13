import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <stronng>Definition:</stronng>
        {props.meaning.definition}
      </p>
      <Example example={props.meaning.example} />

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
