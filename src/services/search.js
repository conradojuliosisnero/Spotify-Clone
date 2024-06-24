import Error from "@/components/Error/Error";
export default async function getSearchTracks(setSearchResults, searchValue) {
  if (!setSearchResults || !searchValue) {
    throw new Error("Missing required parameters");
  }

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.SPOTIFY_API_KEY,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(
      `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(searchValue)}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setSearchResults(data);
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
