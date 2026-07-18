import { Counter } from "./Counter";
import { alertMessage } from "./util";
import "./App.css";
import Converter from "./Converter";

function App() {
  return (
    <div>
      <Counter />
      <button onClick={() => alertMessage("welcome")}>Say Welcome </button>
      <button onClick={() => alertMessage("I am clicked")}>Click on me</button>
      <br />
      <Converter />
    </div>
  );
}

export default App;
