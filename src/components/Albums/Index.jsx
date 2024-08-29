"use client";
import Container from "@/components/Contained/Contained";
import MusicCard from "../MusiCard/Card";
import { getAlbums } from "@/services/albums";
import Image from "next/image";
import defaultImage from "../../../public/img/image.svg";

const Albums = () => {
  return (
    <Container name="Albums">
      <MusicCard />
      <MusicCard />
      <MusicCard />
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
