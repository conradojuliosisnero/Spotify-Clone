"use client";
import Container from "@/components/Contained/Contained";
import MusicCard from "../MusiCard/Card";
import getRecomendations from "@/services/recomendations";
import Image from "next/image";
import defaul from "../../../public/img/image.svg";
import Error from "../Error/Error";
import SkeletonCard from "../Squeleton/Card";
import { useEffect, useState } from "react";

export default function Home() {
  // states
  const [recomendations, setRecomendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // get recomendations

  useEffect(() => {
    const fetchRecomendations = async () => {
      try {
        const { browseStart } = await getRecomendations();
        setRecomendations(browseStart);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recomendations:", error);
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchRecomendations();
  }, []);

  if (loading) { 
    return <SkeletonCard />;
  }

  if (error) { 
    return <Error>Recomendaciones no encontradas</Error>;
  }


  return (
    <>
      {/* RECOMENDATIONS CONTAINER  */}
      <Container name="Recomendaciones">
        {recomendations ? (
          recomendations.items.slice(0, 15).map((track, index) => {
            // verification of the recomendation song name
            const songName = track.content.data.data
              ? track.content.data.data.cardRepresentation.title
                  .transformedLabel
              : track.content.data.title.transformedLabel;

            // verification of the recomendation song image
            const imageUrl =
              track.content.data.data &&
              track.content.data.data.cardRepresentation.artwork.sources[0].url;

            // backgroundColor card
            const backgroundColor =
              track.content.data.data &&
              track.content.data.data.cardRepresentation.backgroundColor.hex;

            return (
              <MusicCard
                key={index}
                styles={backgroundColor}
                albumId={track.uri}
              >
                <div className="card-img">
                  <Image
                    src={imageUrl ? imageUrl : defaul}
                    alt="image-abum"
                    width={100}
                    height={100}
                    quality={60}
                  />
                </div>
                <h2 className="trunk-text">{songName}</h2>
              </MusicCard>
            );
          })
        ) : (
            <div className="text-7xl font-bold w-full justify-center items-center">
              sources not found :(
          </div>
        )}
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { browseStart } = await getRecomendations();
    const recomendations =
      browseStart.sections.items && browseStart.sections.items[0].sectionItems;

    console.log(recomendations);
    return {
      props: {
        recomendations,
      },
    };
  } catch (error) {
    console.error("Error fetching recomendations:", error);
    return {
      props: {
        recomendations: null,
      },
    };
  }
}
