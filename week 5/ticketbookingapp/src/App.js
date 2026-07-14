import { useState } from "react";

function App() {
  const [isLogged, setLogged] = useState(false);

  function handleClick() {
    isLogged ? setLogged(false) : setLogged(true);
  }

  return (
    <div style={{ textAlign: "center", margin: "30px auto" }}>
      {isLogged ? (
        <div>
          <h1>Welcome</h1>
          <button onClick={() => handleClick()}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please SignUp </h1>
          <button onClick={() => handleClick()}> Login </button>
        </div>
      )}
    </div>
  );
}

export default App;
