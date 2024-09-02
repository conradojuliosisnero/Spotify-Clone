"use client";
import Container from "@/components/Contained/Contained";
import MusicCard from "../MusiCard/Card";
import Image from "next/image";
import defaultImage from "../../../public/img/image.svg";
import { useState, useEffect } from "react";
import Error from "../Error/Error";
import BaseSkeletonCard from "@/components/Squeleton/BaseSkeleton";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Albums (){
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/search?q=album");     
        const data = await response.json();
        setAlbums(data);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch albums");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAlbums();
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
    <motion.div variants={container} initial="hidden" animate="visible">
      <Container name="Albums">
        {albums.albums ? (
          albums.albums?.map((album, index) => (
            <motion.div variants={item} key={index}>
              <MusicCard key={index} albumId={album.uri}>
                <div className="card-img">
                  <Image
                    src={album.coverArt || defaultImage}
                    alt={"Album cover"}
                    width={100}
                    height={100}
                    quality={60}
                  />
                </div>
                <h2 className="trunk-text hover:underline">
                  <Link href={`/album/${album.uri}`}>{album.name}</Link>
                </h2>
                <span>{album.year}</span>
              </MusicCard>
            </motion.div>
          ))
        ) : (
          <div className="text-7xl font-bold w-full justify-center items-center">
            No recommendations found :(
          </div>
        )}
      </Container>
    </motion.div>
  );
};


