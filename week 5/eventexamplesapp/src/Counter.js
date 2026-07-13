import { useState } from "react";
import "./App.css";

import { alertMessage } from "./util";

//Increment and Decrement count
export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(val) {
    if (val === "inc") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    alertMessage("Hello!Member" + count);
  }

  return (
    <>
      <h2>Current Count: {count}</h2>
      <button onClick={() => handleClick("inc")}>Increment</button>
      <button onClick={() => handleClick("dec")}>Decrement</button>
    </>
  );
}
