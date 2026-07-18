import { PrintPlayers } from "./PrintPlayers";

export function ListOfPlayers({ players }) {
  return (
    <div>
      <h1> List of Players </h1>
      <PrintPlayers players={players} />
    </div>
  );
}
