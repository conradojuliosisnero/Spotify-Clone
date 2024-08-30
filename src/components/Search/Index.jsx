"use client"
import Container from "@/components/Contained/Contained";
import Image from "next/image";
import MusicCard from "../MusiCard/Card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import RecomendedCard from "@/components/UI/RecomendedCard/Card";
import { motion } from "framer-motion";

export default function Search() {
  const [recomended, setRecomended] = useState(null);
  const music = useSelector((state) => state.search.results);

  useEffect(() => {
    const searchRecomended = async () => {
      try {
        const response = await fetch("/api/home");
        const data = await response.json();
        setRecomended(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("recomended");
      }
    };

    searchRecomended();
  }, []);

    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
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
      <Container name="Busqueda">
        {/* <MusicCard /> */}
        {music
          ? music.albums?.map(({ name, coverArt, year, uri }, index) => (
              <motion.div key={index} variants={item}>
                <MusicCard key={index} albumId={uri}>
                  <div className="card-img">
                    <Image
                      src={coverArt}
                      alt="album cover"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h2 className="trunk-text">{name}</h2>
                  <div>
                    <p>{name}</p>
                    <p>{year}</p>
                  </div>
                </MusicCard>
              </motion.div>
            ))
          : recomended.categories.slice(0, 10).map((category, index) => (
              <RecomendedCard
                key={category.id || category.uri}
                styles={category.backgroundColor}
                albumId={category.uri}
              >
                <div className="card-img">
                  <Image
                    src={category.imageUrl ?? defaultImage}
                    alt={category.title ?? "Album cover"}
                    width={100}
                    height={100}
                    quality={60}
                  />
                </div>
                <h2 className="trunk-text">{category.title ?? "Untitled"}</h2>
              </RecomendedCard>
            ))}

        {/* <MusicCard /> */}
      </Container>
    </motion.div>
  );
}
