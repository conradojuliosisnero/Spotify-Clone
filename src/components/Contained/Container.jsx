"use client";
import "@/app/styles.css";
import MusicCard from "@/components/MusicCard/MusicCard";
import ContextTracks from "@/context/ContextTracks";
import getMusic from "@/services/music/music";
import { useState, useEffect } from "react";

export default function Container({ data }) {
  console.log(data.tracks[0]) ;
  return (
    <>
      <div className="container-name">
        <h1 className="container-title">Popular</h1>
      </div>
      <div className="container-card">
        <ContextTracks>
          <MusicCard song={data} />
        </ContextTracks>
      </div>
    </>
  );
}
