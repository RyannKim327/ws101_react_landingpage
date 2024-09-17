import { Link } from "react-router-dom";
import "./app-css/App.css";
import "./app-css/App-dark.css";

function App() {
  document.title = "Importance of Web Development";
  return (
    <div className="App">
      <section>
        <h1 id="title">Test</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </ul>
      </section>
      <main></main>
    </div>
  );
}

export default App;
