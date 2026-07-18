import { useState } from "react";
import { alertMessage } from "./util";

export default function Convertor() {
  const [amount, setAmount] = useState(80);
  const [currency, setCurrency] = useState("Euro");

  const handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 80;
    const convertedAmount = amount * conversionRate;
    alertMessage(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ paddingBottom: "10px" }}>
          <label style={{ display: "inline-block", width: "80px" }}>
            Amount:
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div style={{ paddingBottom: "10px" }}>
          <label style={{ display: "inline-block", width: "80px" }}>
            Currency:
          </label>
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginLeft: "80px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
