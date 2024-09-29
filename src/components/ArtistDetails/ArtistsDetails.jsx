import { useState, useEffect } from "react";

export default function ArtistsDetails({ params }) {
  console.log(params);
  const [artistData, setArtistData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { artistsId } = params;

  useEffect(() => {
    function albumIdExtraction(artistsId) {
      if (artistsId) {
        const decodedId = decodeURIComponent(artistsId);
        const parts = decodedId.split(":");
        return parts[2];
      }
      return null;
    }

    const extractedId = albumIdExtraction(artistsId);
    // Solo hacer la llamada a la API si extractedId no es null
    if (extractedId) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/albums/${extractedId}`);
          const data = await response.json();
          setAlbumData(data);
          setError(null);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [artistsId]);

  return <div>ArtistsDetails</div>;
}
