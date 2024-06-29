import { spotifyUrls } from "./urls";
export default async function getSearchTracks(query) {
  // URL de la API de Spotify
  const URL = `${spotifyUrls.spotify.search}?q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
  // opciones de la petición
  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(URL, OPTIONS);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error("Failed to fetch tracks");
    }
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return null;
  }
}
