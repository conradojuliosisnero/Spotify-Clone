export default async function getSearchTracks(query) {
  const URL = `${process.env.SPOTIFY_BASE_URL}?q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.SPOTIFY_API_KEY}`,
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(URL, OPTIONS);
    if (!response.ok) {
      throw new Error("Failed to fetch tracks");
    }
    const data = await response.json();
    const simplifiedData = {
      albums: [],
      artists: [],
      episodes: [],
      genres: [],
      playlists: [],
      podcasts: [],
    };

    // Recorre los álbumes
    data.albums.items.forEach((album) => {
      simplifiedData.albums.push({
        uri: album.data.uri,
        name: album.data.name,
        artistName: album.data.artists.items
          .map((artist) => artist.profile.name)
          .join(", "),
        coverArt: album.data.coverArt.sources[0].url,
        year: album.data.date.year,
      });
    });

    // Recorre los artistas
    data.artists.items.forEach((artist) => {
      simplifiedData.artists.push({
        uri: artist.data.uri,
        name: artist.data.profile.name,
        avatar: artist.data.visuals?.avatarImage?.sources[0]?.url || null,
      });
    });

    // Recorre los episodios
    data.episodes.items.forEach((episode) => {
      simplifiedData.episodes.push({
        uri: episode.data.uri,
        name: episode.data.name,
        coverArt: episode.data.coverArt.sources[0].url,
        duration: episode.data.duration.totalMilliseconds,
        releaseDate: episode.data.releaseDate.isoString,
        podcastCoverArt: episode.data.podcast.coverArt.sources[0].url,
        description: episode.data.description,
      });
    });

    // Recorre los géneros
    data.genres.items.forEach((genre) => {
      simplifiedData.genres.push({
        uri: genre.data.uri,
        name: genre.data.name,
        image: genre.data.image.sources[0]?.url || null,
      });
    });

    // Recorre las playlists
    data.playlists.items.forEach((playlist) => {
      simplifiedData.playlists.push({
        uri: playlist.data.uri,
        name: playlist.data.name,
        description: playlist.data.description,
        image: playlist.data.images.items[0]?.sources[0]?.url || null,
        owner: playlist.data.owner.name,
      });
    });

    // Recorre los podcasts
    data.podcasts.items.forEach((podcast) => {
      simplifiedData.podcasts.push({
        uri: podcast.data.uri,
        name: podcast.data.name,
        coverArt: podcast.data.coverArt.sources[0].url,
        type: podcast.data?.type,
        publisher: podcast.data.publisher.name,
      });
    });
    return simplifiedData;
  } catch (error) {
    console.log(error);
    return { error: error.message }
  }
}
