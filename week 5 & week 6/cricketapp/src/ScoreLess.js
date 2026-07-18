import { ListOfPlayers } from "./ListOfPlayers";
import { PrintPlayers } from "./PrintPlayers";

export function ScoreLess({ players }) {
  let playerLess = [];

  for (let player of players) {
    if (player.score < 70) {
      playerLess.push(player);
    }
  }

  return (
    <div>
      <h1> List of Players having Scores Less than 70 </h1>
      <PrintPlayers players={playerLess} />
    </div>
  );
}
