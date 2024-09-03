export default async function getAlbums(albumId, offset = 0, limit = 20) {
  console.log(albumId);
  const URL = `${process.env.SPOTIFY_BASE_URL}/albums/?ids=${albumId}`;
  console.log(URL);
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
    return error;
  }
}
