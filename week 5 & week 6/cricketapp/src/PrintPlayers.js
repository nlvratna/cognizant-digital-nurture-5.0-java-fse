import "./style.css";

export function PrintPlayers({ players }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player.name} className="add-gap">
          <span>Mr.{player.name}</span>
          <span>{player.score}</span>
        </li>
      ))}
    </ul>
  );
}
