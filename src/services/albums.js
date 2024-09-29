export default async function getAlbums(albumId) {
  const URL = `${process.env.SPOTIFY_BASE_URL}/albums/?ids=${albumId}`;
  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(URL, OPTIONS);
    if (response.status !== 200) {
      throw new Error("Failed to fetch albums");
    }
    const data = await response.json();
    // Inicializar objeto simplificado
    let simplifiedData = {};

    data.albums.forEach((album) => {
      simplifiedData = {
        id: album.id,
        name: album.name,
        releaseDate: album.release_date,
        externalUrl: album.external_urls.spotify,
        duration: album.tracks.items.map((tracks) => ({
          time: tracks.duration_ms,
        })),
        images: album.images.map((image) => ({
          url: image.url,
          width: image.width,
          height: image.height,
        })),
        artists: album.artists.map((artist) => ({
          id: artist.id,
          name: artist.name,
          externalUrl: artist.external_urls.spotify,
        })),
        tracks: album.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          durationMs: track.duration_ms,
          externalUrl: track.external_urls.spotify,
        })),
      };
    });

    return simplifiedData;
  } catch (error) {
    console.error("Error fetching albums:", error);
    return { error: error.message };
  }
}
