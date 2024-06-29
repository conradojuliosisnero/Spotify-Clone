import { spotifyUrls } from "./urls";

export default async function getRecomendations() {
  const URL = spotifyUrls.spotify.recomendations;
  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(URL, OPTIONS);
    if (response.ok) {
      const { data } = await response.json();
      return data || [];
    } else {
      console.error("Failed to fetch songs: Response not ok");
      return [];
    }
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
}
