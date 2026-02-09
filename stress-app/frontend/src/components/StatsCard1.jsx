export default function StatsCard({ stats }) {
  return (
    <div className="card" style={{ background: "#f7f7f7", borderRadius: 18 }}>
      <div className="statsRow">
        <div className="statBlock">
          <div className="statTop">Gemiddelde stress</div>
          <div style={{ fontWeight: 900, fontSize: 22 }}>{stats.avgStress}/5</div>
          <div className="muted" style={{ fontWeight: 700 }}>gemiddeld</div>
        </div>

        <div className="statBlock">
          <div className="statTop">Gemiddelde energie</div>
          <div style={{ fontWeight: 900, fontSize: 22 }}>{stats.avgEnergy}/5</div>
          <div className="muted" style={{ fontWeight: 700 }}>laag</div>
        </div>

        <div className="statBlock">
          <div className="statTop">Aantal genomen pauzes</div>
          <div style={{ fontWeight: 900, fontSize: 18 }}>
            {stats.breaksTaken} genomen
          </div>
          <div className="muted" style={{ fontWeight: 700 }}>
            {stats.breaksIgnored} genegeerd
          </div>
        </div>
      </div>
    </div>
  );
}
