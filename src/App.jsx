/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
