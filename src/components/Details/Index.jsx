"use client";
import Portada from "./Portada";
import Play from "./Play";
import { useState, useEffect } from "react";

export default function Details({ params }) {
  const [albumData, setAlbumData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { albumId } = params;

  console.log(albumData);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/albums/${albumId}`);
        const data = await response.json();
        setAlbumData(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, [albumId]);

  return (
    <div className="">
      {/* PORTADA  */}
      <Portada name={"Phonk"} title={"Album Phonk"} />
      {/* LIST  */}
      <Play />
      {/* CONTEND  */}
      <div className="bg-slate-700 w-full flex justify-start items-center">
        music
      </div>
    </div>
  );
}
