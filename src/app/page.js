"use client";
import Container from "@/components/Contained/Container";
import { useState, useEffect } from "react";
import getMusic from "@/services/music/getMusic";

export default function Home() {
  const [songs, setSongs] = useState([]);
  console.log(songs);
  useEffect(() => {
    async function getSongs() {
      try {
        const response = await getMusic(setSongs);
      } catch (error) {
        console.error(error);
      }
    }

    getSongs();
  }, []);
  return (
    <main className="main-content">
      <Container name={"Popular"} data={songs} />
      <Container name={"Artist"} data={''} />
      <Container name={"Albums"} data={''} />
      <Container name={"Playlist"} data={''} />
    </main>
  );
}
