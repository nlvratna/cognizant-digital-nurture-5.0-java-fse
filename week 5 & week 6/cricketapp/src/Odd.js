import { PrintPlayers } from "./PrintPlayers";

export function Odd({ players }) {
  return (
    <>
      <h1> Odd Players </h1>
      <PrintPlayers players={players} />
    </>
  );
}
