"use client";
import Portada from "./Portada";
import Play from "./Play";
import { useState, useEffect } from "react";
import { formatDate } from "@/utils/utils";
import AlbumCard from "../UI/MusicAlbumCard/Card";
import TimeComponet from "../UI/Time/TimeIcon";
import Skeleton from "../UI/AlbumSkeleton/Skeleton";
import SkeletonTrack from "../UI/TrackAlbumSkeleton/SkeletonTrack";

export default function Details({ params }) {
  const [albumData, setAlbumData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { albumId } = params;

  useEffect(() => {
    function albumIdExtraction(albumId) {
      if (albumId) {
        const decodedId = decodeURIComponent(albumId);
        const parts = decodedId.split(":");
        return parts[2];
      }
      return null;
    }

    const extractedId = albumIdExtraction(albumId);
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
  }, [albumId]);

  const img =
    albumData && albumData.images && albumData.images.length > 0
      ? albumData.images[0].url
      : "";

  const date = albumData.releaseDate;
  const formattedDate = new Date(date);

  return (
    <div className="">
      {/* PORTADA  */}
      {loading ? (
        <Skeleton />
      ) : error ? (
        <></>
      ) : (
        <>
          <Portada
            name={albumData.name}
            tracks={albumData.tracks}
            title={"Album"}
            image={img}
            minutes={albumData.duration}
            date={formatDate(formattedDate)}
          />
          {/* LIST  */}
          <Play link={albumData.externalUrl} />
        </>
      )}

      {/* CONTENIDO */}
      <div className="w-full flex justify-center items-start flex-col">
        {/* ALBUMCARD */}
        {loading ? (
          <SkeletonTrack />
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="w-full p-5 rounded-lg">
            <div className="">
              <table className="w-full">
                <thead className="w-full my-1 flex justify-between items-center p-3 border-b-1 border-gray-300/70">
                  <tr className="w-1/2">
                    <td className="text-gray-300 text-2xl">#Titulo</td>
                  </tr>
                  <tr>
                    <td className="text-gray-300 text-2xl">Album</td>
                  </tr>
                  <tr>
                    <td className="text-gray-300 text-2xl">
                      <TimeComponet width={20} height={20} />
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            {albumData &&
              albumData.tracks.map((album, index) => (
                <AlbumCard number={index} key={album.id} album={album} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
