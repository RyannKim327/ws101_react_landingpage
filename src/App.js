import { Link, Route, Routes } from "react-router-dom";
import "./app-css/App.css";

import Footer from "./components/footer";
import Hero from "./components/hero";
import About from "./components/about";

function App() {
  document.title = "Importance of Web Development";
  return (
    <div className="App">
      <section>
        <h1 id="title">Test</h1>
        <ul>
          <li>
            <Link to="/ws101_react_landingpage">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </section>
      <main>
        <Routes>
          <Route path="/ws101_react_landingpage" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
