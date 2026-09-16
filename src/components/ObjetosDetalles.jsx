import { objetos } from '../data/objetos';

export function ObjetosDetalles({ id, onBack }) {
  const objeto = objetos.find((item) => String(item.id) === String(id));

  if (!objeto) {
    return (
      <div className="detail-error">
        <h2>Objeto no encontrado</h2>
        <button className="back-button" onClick={onBack}>Volver al catálogo</button>
      </div>
    );
  }

  return (
    <div className="character-detail" style={{ '--accent-color': objeto.color || '#ffffff' }}>
      <header className="header-color">
        <div className="header-content">
          <button className="back-button" onClick={onBack}>
            ← VOLVER
          </button>
        </div>
      </header>

      <div className="detail-container">
        {/* COLUMNA IZQUIERDA: Información */}
        <div className="info-column">
          <h1>{objeto.nombre}</h1>
          <div className="version-info">
            {Array.isArray(objeto.descripcion) ? (
              objeto.descripcion.map((parrafo, idx) => (
                <p key={idx}>{parrafo}</p>
              ))
            ) : (
              <p>{objeto.descripcion}</p>
            )}
          </div>
        </div>

        {/* COLUMNA DERECHA: Imagen principal */}
        <div className="visual-column">
          <img
            src={objeto.imagen_completa || objeto.thumbnail}
            alt={objeto.nombre}
            className="fullbody-image"
          />
        </div>
      </div>
    </div>
  );
}