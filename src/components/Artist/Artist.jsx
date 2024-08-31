"use client";
import Container from "../Contained/Contained";
import MusicCard from "../MusiCard/Card";
import { useState, useEffect } from "react";
import Error from "../Error/Error";
import BaseSkeletonCard from "../Squeleton/BaseSkeleton";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Artist() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/search?q=artists");
        const data = await response.json();
        setArtists(data);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch artists");
      } finally {
        setIsLoading(false);
      }
    };
    fetchArtists();
  }, []);

  if (isLoading) {
    return <BaseSkeletonCard />;
  }

  if (error) {
    return <Error>Error al obtener datos</Error>;
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  console.log(artists);
  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <Container name="Artist">
        {artists?.albums?.map((artist, index) => (
          <motion.div key={index} variants={item}>
            <MusicCard key={index} albumId={artist.uri}>
              <div className="card-img">
                <Image
                  src={artist.coverArt || defaultImage}
                  alt={"artist cover"}
                  width={100}
                  height={100}
                  quality={60}
                />
              </div>
              <h2 className="trunk-text">{artist.name}</h2>
              <span className="text-white">{artist.artistName}</span>
              <span className="text-white">{artist.year}</span>
            </MusicCard>
          </motion.div>
        ))}
      </Container>
    </motion.div>
  );
}
