"use client";
import Container from "@/components/Contained/Contained";
import MusicCard from "../MusiCard/Card";
import { getAlbums } from "@/services/albums";
import Image from "next/image";
import defaultImage from "../../../public/img/image.svg";
import { useState, useEffect } from "react";
import Error from "../Error/Error";
import SkeletonCard from "@/components/Squeleton/Card";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/albums");
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
      return <SkeletonCard />;
    }

    if (error) {
      return <Error>Error al obtener datos</Error>;
    }

  return (
    <Container name="Albums">
        <MusicCard
          // key={index}
          styles={""}
          // albumId={category.uri}
        >
          <div className="card-img">
            <Image
              src={defaultImage}
              alt={"Album cover"}
              width={100}
              height={100}
              quality={60}
            />
          </div>
          <h2 className="trunk-text">title</h2>
        </MusicCard>
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
