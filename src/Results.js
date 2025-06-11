import React from "react";

export default function Results(props) {
  if (props.data) {
    return <div> The word you are looking for is {props.data.word}</div>;
  } else {
    return null;
  }
}
