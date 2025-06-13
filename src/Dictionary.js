import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <section className="shadow">
        <h1 className="Dictionary">Dictionary</h1>
        <form onSubmit={search}>
          <input
            className="input"
            type="search"
            autoFocus={true}
            onChange={handleKeyword}
          />
          <input className="submit" type="submit" value="Search" />
        </form>
        <div className="suggestion">suggested words: kiss, sunset, flask..</div>
      </section>
      <Results data={results} />
    </div>
  );
}
