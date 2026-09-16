export function ObjetoCard({ objeto, onSelect }) {
  return (
    <div className="character-card" onClick={() => onSelect(objeto.id)}>
      <img src={objeto.thumbnail} alt={objeto.nombre} />
    </div>
  );
}