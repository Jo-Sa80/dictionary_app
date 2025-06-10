import "./App.css";
import Dictionary from "./Dictionary.js";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="img-fluid App-logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className=" App-footer">
        {" "}
        Coded by Johanna Sandvoß and hostet on{" "}
        <a href="https://johannas-dictionary-app.netlify.app/" target="_blank">
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
