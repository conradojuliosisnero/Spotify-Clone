"use client";
import Container from "@/components/Contained/Contained";
import Image from "next/image";
import MusicCard from "../MusiCard/Card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

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

  console.log(music);
  console.log(recomended);

  return (
    <Container name="Busqueda">
      {/* <MusicCard /> */}
      {music ? (
        music.albums?.map(({ name, coverArt, year, uri }, index) => {
          return (
            <MusicCard key={index} uri={uri}>
              <div className="card-img">
                <Image
                  src={coverArt}
                  alt="image-abum"
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
          );
        })
      ) : (
        <>
          {/* {recomended?.categories?.map(
            ({ name, coverArt, year, uri }, index) => {
              return (
                <MusicCard key={index} uri={uri}>
                  <div className="card-img">
                    <Image
                      src={coverArt}
                      alt="image-abum"
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
              );
            }
          )} */}
        </>
      )}

      {/* <MusicCard /> */}
    </Container>
  );
}
