import { spotifyUrls } from "./urls";

async function getSongs() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify-web2.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(spotifyUrls.spotify.songs, options);
    if (response.ok) {
      const result = await response.json();
      // console.log(result);
      return result
    } else {
      console.log(`ups... algo salio mal en la llamada`);
    }
  } catch (error) {
    console.error(error);
  }
}

export default getSongs;
