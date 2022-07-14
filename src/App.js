import { useState, useCallback } from "react";
import List from "./List.js";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark((prevTheme) => !prevTheme);
  }

  const getItems = useCallback(
    (incrementor) => {
      return [number, number + incrementor, number + incrementor + 1];
    },
    [number]
  );

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
        required
      ></input>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={{ background: "blue" }}>{dark ? "dark" : "light"}</div>
      <div style={{ background: "red" }}>
        <List getItems={getItems} />
      </div>
    </>
  );
}

export default App;
