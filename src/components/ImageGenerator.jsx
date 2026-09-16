import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { generateImage } from '../services/imageService';

export function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError('');
    setImageUrl(null);
    try {
      const url = await generateImage(prompt);
      setImageUrl(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <Link to="/">← Volver al inicio</Link>
      <h2>Generador de Imágenes con IA</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe la imagen que quieres crear..."
          style={{ flex: 1, padding: '10px', fontSize: '16px' }}
          disabled={loading}
        />
        <button
          onClick={handleGenerate}
          disabled={loading || !prompt.trim()}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          {loading ? 'Generando...' : 'Generar'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{
        marginTop: '20px',
        minHeight: '300px',
        border: '1px dashed #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {loading && <p>Creando tu obra de arte...</p>}
        {!loading && imageUrl && (
          <img src={imageUrl} alt={prompt} style={{ maxWidth: '100%', maxHeight: '400px' }} />
        )}
        {!loading && !imageUrl && !error && <p>La imagen generada aparecerá aquí.</p>}
      </div>
    </div>
  );
}