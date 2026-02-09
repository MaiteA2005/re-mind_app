import "./navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <div className="brand">
          <span className="brandMark">Re:Mind</span>
        </div>

        <nav className="links">
          <a className="link active" href="#">Home</a>
          <a className="link" href="#">Dagrapport</a>
          <a className="link" href="#">Weekrapport</a>
          <a className="link" href="#">Pauzesuggesties</a>
        </nav>

        <button className="profile" aria-label="Profiel">
          👤
        </button>
      </div>
    </header>
  );
}
