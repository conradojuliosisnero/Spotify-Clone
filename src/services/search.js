import Error from "@/components/Error/Error";
export default async function getSearchTracks(setSearchResults, searchValue) {
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9fa5dbd58fmshd408552cba39728p1ecfedjsn73ab9da00e48",
    "x-rapidapi-host": "spotify23.p.rapidapi.com",
  },
};

  try {
    const response = await fetch(
      `https://spotify23.p.rapidapi.com/search/?q=${searchValue}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
      options
    );
    if (response.ok) {
      const data = await response.json();
      setSearchResults(data);
    } else {
      throw new Error("Error al obtener datos");
    }
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
