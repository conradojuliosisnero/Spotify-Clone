"use client";
import "@/app/styles.css";
import MusicCard from "@/components/MusicCard/MusicCard";
import { useSelector } from "react-redux";

export default function Container({ name }) {
  const {
    tracks: { tracks },
  } = useSelector((state) => state.songTracks);

  return (
    <>
      <div className="container-name">
        <h1 className="container-title">{name}</h1>
      </div>
      <div className="container-card">
        {tracks?.items?.map((card, index) => (
          <MusicCard dataCard={card} key={index} />
        ))}
      </div>
    </>
  );
}
