import React, { useState } from "react";

import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleResponse(response) {
    console.log(response.data.word);
  }
  let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";

  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div>
      <h1 className="Dictionary">Hello from Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyword} />
      </form>
    </div>
  );
}
