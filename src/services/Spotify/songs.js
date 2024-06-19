import { spotifyUrls } from "./urls";

export default async function getSongs() {
  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(spotifyUrls.spotify.recomendations, OPTIONS);
    if (response.ok) {
      const { tracks } = await response.json();
      console.log(tracks);
      return tracks;
    } else {
      console.log(`ups... algo salio mal en la llamada`);
    }
  } catch (error) {
    console.error(error);
  }
}
