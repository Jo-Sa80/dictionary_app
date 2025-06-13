import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        <p>
          <strong>Example:</strong> {props.example}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
