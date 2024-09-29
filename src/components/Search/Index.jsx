"use client";
import Container from "@/components/Contained/Contained";
import Image from "next/image";
import MusicCard from "../MusiCard/Card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import RecomendedCard from "@/components/UI/RecomendedCard/Card";
import { motion } from "framer-motion";
import Link from "next/link";
import ArtistCard from "../ArtistCard/ArtistCard";
import defaultImage from "../../../public/img/image.svg";

export default function Search() {
  const [recomended, setRecomended] = useState(null);
  const results = useSelector((state) => state.search.results);

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

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <Container name="Busqueda">
        {/* Mostrar resultados de búsqueda si existen */}
        {results?.albums?.length > 0
          ? results.albums.map(({ name, coverArt, year, uri }, index) => (
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
                  <h2 className="trunk-text">
                    <Link href={`/albums/${uri}`} className="hover:underline">
                      {name}
                    </Link>
                  </h2>
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
                    quality={50}
                    height={100}
                    alt="cover-art"
                    className="absolute -bottom-2 -right-10 w-[120px] h-[120px] rounded-lg object-cover transform rotate-[25deg] shadow-xl"
                  />
                  <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                    <p className="text-4xl font-bold text-white leading-tight">
                      <span>
                        {category.title}
                      </span>
                    </p>
                  </div>
                </RecomendedCard>
              </motion.div>
            ))}
        {/* ARTISTS  */}
      </Container>
      {results.artists?.length > 0 && (
        <Container name="Busqueda de Artistas">
          {results?.artists?.map((artist, index) => (
            <motion.div key={index} variants={item}>
              <ArtistCard key={index} albumId={artist.uri}>
                <div>
                  <Image
                    src={artist.avatar || defaultImage}
                    alt={"artist cover"}
                    width={160}
                    height={160}
                    quality={60}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <h2 className="trunk-text font-bold text-2xl">
                    <span className="text-white">{artist.name}</span>
                  </h2>
                </div>
              </ArtistCard>
            </motion.div>
          ))}
        </Container>
      )}
      {/* PLAYLIST  */}
      {results.playlists?.length > 0 && (
        <Container name="Busqueda de PlayList">
          {results?.playlists?.map((playlist, index) => (
            <motion.div key={index} variants={item}>
              <MusicCard key={index} albumId={playlist?.uri}>
                <div className="card-img">
                  <Image
                    src={playlist?.image || defaultImage}
                    alt="album cover"
                    width={100}
                    height={100}
                  />
                </div>
                <h2 className="trunk-text">
                  <span>{playlist?.name}</span>
                </h2>
                <div>
                  <p>{playlist?.name}</p>
                  <p>{playlist?.owner}</p>
                </div>
              </MusicCard>
            </motion.div>
          ))}
        </Container>
      )}
    </motion.div>
  );
}
