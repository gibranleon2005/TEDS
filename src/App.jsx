import { Routes, Route, Link, useSearchParams } from 'react-router-dom';
import { ObjetosGrid } from './components/ObjetosGrid';
import { ObjetosDetalles } from './components/ObjetosDetalles';
import { ImageGenerator } from './components/ImageGenerator';

function ObjetosApp() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeObjId = searchParams.get('obj');

  const handleSelectObject = (id) => setSearchParams({ obj: id });
  const handleBackToGrid = () => setSearchParams({});

  return (
    <div className="app-shell">
      {!activeObjId && (
        <header className="header">
          <div className="logo">
            <img src="/objetos/logo.png" alt="Logo" />
          </div>
          <Link to="/ia">Generar imagen con IA</Link>
        </header>
      )}

      <main className="content">
        {!activeObjId ? (
          <ObjetosGrid onSelectObject={handleSelectObject} />
        ) : (
          <ObjetosDetalles id={activeObjId} onBack={handleBackToGrid} />
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ObjetosApp />} />
      <Route path="/ia" element={<ImageGenerator />} />
    </Routes>
  );
}