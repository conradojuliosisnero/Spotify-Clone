import Error from "@/components/Error/Error";
import spotifyUrls from "./urls";

export async function getAlbums() {
  const URL = spotifyUrls.spotify.albums;
  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(URL, OPTIONS);
    if (!response) {
      throw new Error("Failed to fetch albums");
    }
    return response;
  } catch (error) {
    console.error("Error fetching albums:", error);
    return <Error />;
  }
}
