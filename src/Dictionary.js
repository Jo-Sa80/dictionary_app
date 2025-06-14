import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
import Images from "./Images";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [images, setImages] = useState(null);

  function displayImages(response) {
    setImages(response.data.photos);
    console.log(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let apiImageKey = "1c9131f04b7fo56320ba61f00b43t4cd";
    let apiImageUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiImageKey}`;

    axios.get(apiImageUrl).then(displayImages);
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

      <Images images={images} />
    </div>
  );
}
