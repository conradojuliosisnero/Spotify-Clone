import { spotifyUrls } from "./urls";
import { useDispatch } from "react-redux";
import { setSearch } from "@/features/search/songSlice";

const dispath = useDispatch();

const URL = spotifyUrls.spotify.albums;

const OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
    "x-rapidapi-host": "spotify-web2.p.rapidapi.com",
  },
};

export default async function searchAlbums() {
  try {
    const response = await fetch(URL, OPTIONS);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      dispath(setSearch(result));
    } else {
      console.log(`ups... algo salio mal en la llamada :c`);
    }
  } catch (error) {
    console.error(error);
  }
}
