import "./App.css";

function App() {
  const offices = [
    { Name: "DBS", Rent: 6000, Address: "Chennai", ImgSrc: "/1.webp" },
    {
      Name: "ABC",
      Rent: 7000,
      Address: "Hyderabad",
      ImgSrc: "/2.webp",
    },
    {
      Name: "DMS",
      Rent: 8000,
      Address: "Bengaluru",
      ImgSrc: "/3.webp",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Office Space,At Affordable Range </h1>
      <div className="center">
        {offices.map((office) => (
          <div className="office">
            <img src={office.ImgSrc} className="img-block" />
            <h2> Name:{office.Name} </h2>
            <h4
              className={office.Rent > 5000 ? "red" : "green"}
              style={{ marginBottom: "30px" }}
            >
              Rent:{office.Rent}
            </h4>
            <h4>Address :{office.Address} </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
