export function MergePlayers() {
  const t20Players = ["virat", "rohit", "dhoni", "raina"];
  const ranjiPlayers = ["sachin", "vijay", "rahane", "eashewaran"];

  const mergedPlayes = [...t20Players, ...ranjiPlayers];

  return (
    <div>
      <h1>List of Indian Players Merged:</h1>
      <ul>
        {mergedPlayes.map((player) => (
          <li>
            <span>{player}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
