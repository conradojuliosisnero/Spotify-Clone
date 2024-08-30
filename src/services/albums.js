export default async function getAlbums(artistId, offset = 0, limit = 20) {
  const URL = `${process.env.SPOTIFY_BASE_URL}/album_tracks/?id=${artistId}&offset=${offset}&limit=${limit}`;
  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(URL, OPTIONS);
    if (!response.ok) {
      throw new Error("Failed to fetch albums");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching albums:", error);
    return error;
  }
}
