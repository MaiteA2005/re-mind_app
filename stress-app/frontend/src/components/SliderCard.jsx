export default function SliderCard({ title, value, onChange, icon }) {
  return (
    <div className="card">
      <div className="cardTitle">{icon} {title}</div>

      <input
        type="range"
        min="1"
        max="5"
        step="1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
      </div>
    </div>
  );
}
