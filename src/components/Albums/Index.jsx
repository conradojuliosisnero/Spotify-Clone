"use client";
import Container from "@/components/Contained/Contained";
import MusicCard from "../MusiCard/Card";
import { getAlbums } from "@/services/albums";
import Image from "next/image";
import defaultImage from "../../../public/img/image.svg";
import { useState, useEffect } from "react";
import Error from "../Error/Error";
import BaseSkeletonCard from "@/components/Squeleton/BaseSkeleton";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/search?q=albums");
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

  return (
    <Container name="Albums">
      {albums.albums?.map((album, index) => (
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
          <h2 className="trunk-text">{album.name}</h2>
          <span>{album.year}</span>
        </MusicCard>
      ))}
    </Container>
  );
};

export default Albums;

export async function getStaticProps() {
  const albums = await getAlbums();
  console.log(albums);
  return {
    props: {
      albums,
    },
  };
}
