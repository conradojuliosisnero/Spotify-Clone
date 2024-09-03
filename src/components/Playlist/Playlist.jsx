"use client";
import Container from "../Contained/Contained";
import MusicCard from "../MusiCard/Card";
import Image from "next/image";
import defaultImage from "../../../public/img/image.svg";
import { useState, useEffect } from "react";
import Error from "../Error/Error";
import BaseSkeletonCard from "@/components/Squeleton/BaseSkeleton";
import { motion } from "framer-motion";

export default  function Playlist (){
  const [playList, setPlayList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlayList = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/search?q=playlist");
        const data = await response.json();
        setPlayList(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch artists");
      }
    };

    getPlayList();
  }, []);

    if (loading) {
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
      <Container name="Play List">
        {playList?.albums ? (
          playList?.albums?.map((artist, index) => (
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
          ))
        ) : (
          <div className="text-7xl font-bold w-full justify-center items-center">
            Playlist not found :(
          </div>
        )}
      </Container>
    </motion.div>
  );
};


