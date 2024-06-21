export default async function useFetch(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    
    if (!response.ok) {
      // Si la respuesta no es exitosa, arrojar un error con detalles
      throw new Error(
        `La solicitud falló con el código de estado ${response.status}`
      );
    }
    return data;
  } catch (error) {
    // Capturar y arrojar cualquier error que ocurra durante la llamada
    throw new Error(`Ups.. algo salió mal en la llamada: ${error.message}`);
  }
}
