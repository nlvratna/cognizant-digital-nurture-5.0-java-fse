import { ListOfPlayers } from "./ListOfPlayers";
import { ScoreLess } from "./ScoreLess";
import { Odd } from "./Odd.js";
import { Even } from "./Even";
import { MergePlayers } from "./MergePlayers";

function App() {
  const players = [
    { name: "sachin", score: 10 },
    { name: "virat", score: 18 },
    { name: "dhoni", score: 7 },
    { name: "raina", score: 3 },
    { name: "rohit", score: 45 },
    { name: "bumrah", score: 93 },
    { name: "klrahul", score: 1 },
    { name: "yuvraj", score: 12 },
    { name: "jadeja", score: 8 },
    { name: "ashwin", score: 99 },
    { name: "sehwag", score: 44 },
  ];

  const oddPlayers = [];
  const evenPlayers = [];
  for (let player of players) {
    if (player.score % 2 == 0) {
      evenPlayers.push(player);
    } else {
      oddPlayers.push(player);
    }
  }

  let flag = true;
  return (
    <div>
      {flag ? (
        <div>
          <ListOfPlayers players={players} />
          <hr />
          <ScoreLess players={players} />
        </div>
      ) : (
        <div>
          <Odd players={oddPlayers} />
          <hr />
          <Even players={evenPlayers} />
          <hr />
          <MergePlayers />
        </div>
      )}
    </div>
  );
}

export default App;
