import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import About from "./components/Aboutme";

function App() {
  return (
    <div className="App">
      <header id="header">
        <Navigation />
      </header>
      <main>
        {/* <HomePage /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
