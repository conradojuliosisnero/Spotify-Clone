export default async function getAlbums(setAlbums) {
  try {
    const url = "https://spotify-web2.p.rapidapi.com/albums/";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9fa5dbd58fmshd408552cba39728p1ecfedjsn73ab9da00e48",
        "x-rapidapi-host": "spotify-web2.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setAlbums(result)
  } catch (error) {
    console.error(error);
  }
}
