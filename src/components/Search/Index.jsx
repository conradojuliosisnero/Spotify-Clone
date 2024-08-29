"use client";
import Container from "@/components/Contained/Contained";
import Image from "next/image";
import MusicCard from "../MusiCard/Card";
import { useSelector } from "react-redux";
import Error from "../Error/Error";

export default function Search() {
  const music = useSelector((state) => state.search.results);

  return (
    <Container name="Buscar">
      {/* <MusicCard /> */}
      {music ? (
        music.albums?.map(({ name, coverArt, year, uri }, index) => {
          return (
            <MusicCard key={index} >
              <div className="card-img">
                <Image
                  src={coverArt}
                  alt="image-abum"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="trunk-text">{name}</h2>
              <span>{name}</span>
            </MusicCard>
          );
        })
      ) : (
        <Error>{"Error al obtener datos"}</Error>
      )}
    </Container>
  );
}
