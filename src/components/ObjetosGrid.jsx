import { objetos } from '../data/objetos';
import { ObjetoCard } from './ObjetosCarta';

export function ObjetosGrid({ onSelectObject }) {
  return (
    <div className="character-grid">
      {objetos.map((obj) => (
        <ObjetoCard
          key={obj.id}
          objeto={obj}
          onSelect={onSelectObject}
        />
      ))}
    </div>
  );
}