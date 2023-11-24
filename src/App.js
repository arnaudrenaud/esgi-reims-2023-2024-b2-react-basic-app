import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Counter from "./Counter";
import Names from "./Names";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isCounterError, setIsCounterError] = useState(false);

  return (
    <BrowserRouter>
      <nav className="App-navigation">
        <Link to="/">Compteur</Link>
        <Link to="/names">Générateur de noms</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Counter
              count={count}
              onClickMinus={() => {
                if (count > 0) {
                  setCount(count - 1);
                } else {
                  setIsCounterError(true);
                }
              }}
              onClickPlus={() => {
                setCount(count + 1);
                setIsCounterError(false);
              }}
              errorMessage={
                isCounterError ? "La valeur doit être positive" : ""
              }
            />
          }
        />
        <Route path="/names" element={<Names />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
