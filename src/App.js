import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <BrowserRouter>
      <nav className="App-navigation">
        <Link to="/">Compteur</Link>
        <Link to="/names">Générateur de noms</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/names" element={<div>Names</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
