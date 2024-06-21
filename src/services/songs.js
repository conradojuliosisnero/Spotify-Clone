import { spotifyUrls } from "./urls";
import useFetch from "@/hooks/useFetch";

export default async function getSongs() {
  const URL = spotifyUrls.spotify.recomendations;
  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const { tracks } = await useFetch(URL, OPTIONS);
    return tracks;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return null;
  }
}
