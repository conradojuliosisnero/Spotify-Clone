"use client";
import Container from "../Contained/Contained";
import MusicCard from "../MusiCard/Card";
import { useState, useEffect } from "react";
import Error from "../Error/Error";
import BaseSkeletonCard from "../Squeleton/BaseSkeleton";
import { motion } from "framer-motion";
import Image from "next/image";
import ArtistCard from "../ArtistCard/ArtistCard";
import defaultImage from "../../../public/img/image.svg";
import Link from "next/link";

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

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <Container name="Artist">
        {artists?.albums ? (
          artists?.albums?.map((artist, index) => (
            <motion.div key={index} variants={item}>
              <ArtistCard key={index} albumId={artist.uri}>
                <div>
                  <Image
                    src={artist.coverArt || defaultImage}
                    alt={"artist cover"}
                    width={160}
                    height={160}
                    quality={60}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <h2 className="trunk-text font-bold text-2xl">
                    <Link
                      href={`/artist/${artist.uri}`}
                      className="text-white hover:underline"
                    >
                      {artist.artistName}
                    </Link>
                  </h2>
                  <span className="text-white">Artist</span>
                </div>
              </ArtistCard>
            </motion.div>
          ))
        ) : (
          <div className="text-7xl font-bold w-full justify-center items-center">
            Artist not found :(
          </div>
        )}
      </Container>
    </motion.div>
  );
}
