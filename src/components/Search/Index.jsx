"use client"
import Container from "@/components/Contained/Contained";
import Image from "next/image";
import MusicCard from "../MusiCard/Card";
import { useSelector } from "react-redux";
import Error from "../Error/Error";

export default function Search() {

  const track = useSelector((state) => state.search.track);

  return (
    <Container name="Buscar">
      {/* <MusicCard /> */}
      {track ? (
        track.map((track, index) => {
          return (
            <MusicCard key={index}>
              <div className="card-img">
                <Image
                  src={imageUrl}
                  alt="image-abum"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="trunk-text">{track.name}</h2>
              <span>{track.artists[0].name}</span>
            </MusicCard>
          );
        })
      ) : (
        <Error>
            {"Error al obtener datos"}
        </Error>
      )}
    </Container>
  );
}
