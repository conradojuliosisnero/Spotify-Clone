import { spotifyUrls } from "./urls";

export default async function getSongs() {
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
    "x-rapidapi-host": "spotify23.p.rapidapi.com",
  },
};


  try {
    const response = await fetch(spotifyUrls.spotify.recomendations, options);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log(`ups... algo salio mal en la llamada`);
    }
  } catch (error) {
    console.error(error);
  }
}

