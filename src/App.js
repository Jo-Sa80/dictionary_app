import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="img-fluid App-logo" />
        This is the Dictionary App{" "}
      </header>
      <a
        href="https://johannas-dictionary-app.netlify.app/"
        className="btn btn-primary"
      >
        Netlify
      </a>
    </div>
  );
}

export default App;
