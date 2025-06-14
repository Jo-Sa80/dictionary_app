import "./App.css";
import Dictionary from "./Dictionary.js";
import logo_blank from "./logo_blank.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo_blank} alt="logo" className="img-fluid App-logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className=" App-footer">
        {" "}
        Coded by Johanna Sandvoß sourced on{" "}
        <a
          href="https://github.com/Jo-Sa80/dictionary_app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hostet on{" "}
        <a
          href="https://johannas-dictionary-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
