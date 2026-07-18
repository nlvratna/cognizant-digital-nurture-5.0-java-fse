import { PrintPlayers } from "./PrintPlayers";

export function Even({ players }) {
  return (
    <>
      <h1> Even Players </h1>
      <PrintPlayers players={players} />
    </>
  );
}
