export default function ExerciseCard() {
  return (
    <div className="card" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 18, alignItems: "center" }}>
      <div style={{ height: 140, borderRadius: 16, background: "#bfbfbf", display: "grid", placeItems: "center", color: "#fff", fontWeight: 800 }}>
        Image
      </div>

      <div>
        <div style={{ fontSize: 22, fontWeight: 900 }}>Neem een moment voor jezelf</div>
        <div className="muted" style={{ marginTop: 6, fontWeight: 700 }}>
          Bekijk de oefeningen om je stress te verlagen
        </div>
        <div style={{ marginTop: 12 }}>
          <button className="btn btnPrimary" onClick={() => alert("Oefeningen (demo)")}>
            Ga naar oefeningen
          </button>
        </div>
      </div>
    </div>
  );
}
