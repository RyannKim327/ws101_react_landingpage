import { Link } from "react-router-dom";
import Title from "./../utils/title";
import "./hero.css";

export default function Hero() {
  Title("Homepage");
  return (
    <div className="hero-section">
      <h1>What is the importance of technology?</h1>
      <h3>Please click the button below to start</h3>
      <Link to="/about">Get started</Link>
    </div>
  );
}
