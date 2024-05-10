"use client"
import Container from "@/components/Contained/Container";
import { useState, useEffect } from "react";
import getMusic from "@/services/music/music";

export default function Home() {
  const [songs, setSongs] = useState([]);
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
    <main>
      <Container data={songs} />
    </main>
  );
}
