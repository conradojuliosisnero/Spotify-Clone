export default async function getMusic(setSongs) {
  const url =
    "https://spotify-web2.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv";
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
      const { tracks } = await response.json();
      setSongs(tracks);
    } else {
      console.log("ups... algo salio mal");
    }
  } catch (error) {
    console.error(error);
  }
}
