const POLLINATIONS_TOKEN = import.meta.env.VITE_POLLINATIONS_API_KEY;

export async function generateImage(prompt) {
  try {
    const url = `https://gen.pollinations.ai/image/${encodeURIComponent(prompt)}?width=1024&height=1024&nologo=true&enhance=true&model=flux`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${POLLINATIONS_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error('La respuesta de la red no fue correcta');
    }

    const imageBlob = await response.blob();

    return URL.createObjectURL(imageBlob);

  } catch (error) {
    console.error("Error al generar la imagen:", error);
    throw new Error("No se pudo generar la imagen. Revisa la consola.");
  }
}