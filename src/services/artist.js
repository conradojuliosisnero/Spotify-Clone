export default async function getArtist(query) {
  const url = `${process.env.SPOTIFY_BASE_URL_ARTIST}?ids=${query}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch artist data");
    }
    const data = await response.json();

    // Procesar y simplificar los datos del artista
    const processedData = data.artists.map((artist) => ({
      id: artist.id,
      name: artist.name,
      genres: artist.genres,
      followers: artist.followers.total,
      popularity: artist.popularity,
      imageUrl: artist.images[0]?.url || null, // Usa la imagen de mayor resolución si está disponible
      spotifyUrl: artist.external_urls.spotify,
    }));

    return processedData[0];
  } catch (error) {
    return error;
  }
}
