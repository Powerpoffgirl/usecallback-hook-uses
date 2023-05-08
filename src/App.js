import "./App.css";
import Child from "./Child";
import { useCallback, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello!");
  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div className="App">
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {!toggle && <p>Button toggled!</p>}
    </div>
  );
}

export default App;
