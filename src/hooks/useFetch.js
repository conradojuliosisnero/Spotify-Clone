/**
 * Hook para hacer llamadas a una API
 * @param {string} url - URL de la API
 * @param {object} options - Opciones para la petición (método, headers, body, etc.)
 * @returns {Promise<any>} - Promesa que se resuelve con la respuesta de la API
 */

export const useFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
