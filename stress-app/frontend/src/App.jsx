import { useState } from "react";

function App() {
  const [stress, setStress] = useState(3);
  const [energy, setEnergy] = useState(3);
  const [result, setResult] = useState(null);

  const submitCheckin = async () => {
    const res = await fetch("http://localhost:3000/checkin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stress, energy })
    });

    const data = await res.json();
    setResult(data.needPause);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Dagelijkse check-in</h2>

      <p>Stress: {stress}</p>
      <input type="range" min="1" max="5"
        value={stress}
        onChange={(e) => setStress(e.target.value)} />

      <p>Energie: {energy}</p>
      <input type="range" min="1" max="5"
        value={energy}
        onChange={(e) => setEnergy(e.target.value)} />

      <br /><br />
      <button onClick={submitCheckin}>Opslaan</button>

      {result !== null && (
        <p>
          {result ? "Neem een korte pauze" : "Geen pauze nodig"}
        </p>
      )}
    </div>
  );
}

export default App;
