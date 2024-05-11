const getSearchTracks = async (setSearchResults, string) => {
  const url = `https://spotify-web2.p.rapidapi.com/search/?q=${string}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9fa5dbd58fmshd408552cba39728p1ecfedjsn73ab9da00e48",
      "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const result = await response.json();
      setSearchResults(result);
    } else {
      console.log(`algo salio mal al hacer fetch`);
    }
  } catch (error) {
    console.error(`ups... algo salio mal: `, error);
  }
};

export default getSearchTracks;
