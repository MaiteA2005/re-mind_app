export default function PauseCard({ icon, title, isFavorite, onToggleFavorite }) {
  return (
    <article className="pause-card">
      <div className="pause-iconBox">
        <img src={icon} alt={title} />
      </div>

      <div className="pause-content">
        <h3>{title}</h3>
      </div>

      <button
        className={`pause-favBtn ${isFavorite ? "active" : ""}`}
        onClick={onToggleFavorite}
        aria-label={isFavorite ? "Verwijder uit favorieten" : "Voeg toe aan favorieten"}
        type="button"
      >
        {isFavorite ? "♥" : "♡"}
      </button>
    </article>
  );
}
