"use client";
import Container from "@/components/Contained/Contained";
import Image from "next/image";
import MusicCard from "../MusiCard/Card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import RecomendedCard from "@/components/UI/RecomendedCard/Card";
import { motion } from "framer-motion";
import Link from "next/link";

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

  console.log(music);
  console.log(recomended);

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <Container name="Busqueda">
        {/* Mostrar resultados de búsqueda si existen */}
        {music?.albums?.length > 0
          ? music.albums.map(({ name, coverArt, year, uri }, index) => (
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
          : // Mostrar recomendados solo si no hay resultados de búsqueda
            recomended?.categories?.slice(0, 10).map((category, index) => (
              <motion.div key={index} variants={item}>
                <RecomendedCard
                  key={category.id || category.uri}
                  category={category}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <Image
                    src={category.imageUrl || ""}
                    width={100}
                    quality={70}
                    height={100}
                    alt="cover-art"
                    className="absolute -bottom-2 -right-24 w-[170px] h-[170px] object-cover transform rotate-[25deg] shadow-xl"
                  />
                  <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                    <p className="text-4xl font-bold text-white leading-tight hover:underline">
                      <Link href={`/albums/${category.name}`}>
                        {category.title}
                      </Link>
                    </p>
                  </div>
                </RecomendedCard>
              </motion.div>
            ))}
      </Container>
    </motion.div>
  );
}
