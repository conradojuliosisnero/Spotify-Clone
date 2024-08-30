"use client";
import { useEffect, useState } from "react";
import Container from "@/components/Contained/Contained";
import MusicCard from "../MusiCard/Card";
import Image from "next/image";
import defaultImage from "../../../public/img/image.svg";
import Error from "../Error/Error";
import SkeletonCard from "../Squeleton/Card";
import ArtistCard from "../ArtistCard/ArtistCard";

export default function Home() {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/home");
        const data = await response.json();
        setRecommendations(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError("Failed to fetch recommendations");
      } finally {
        setLoading(false);
      }
    };
    fetchRecommendations();
  }, []);

  if (loading) {
    return <SkeletonCard />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <>
      <Container name="Recomendaciones">
        {recommendations && recommendations.categories ? (
          recommendations.categories.slice(0, 10).map((category, index) => (
            <MusicCard
              key={index}
              styles={category.backgroundColor}
              albumId={category.uri}
            >
              <div className="card-img">
                <Image
                  src={category.imageUrl || defaultImage}
                  alt={category.title || "Album cover"}
                  width={100}
                  height={100}
                  quality={60}
                />
              </div>
              <h2 className="trunk-text">{category.title}</h2>
            </MusicCard>
          ))
        ) : (
          <div className="text-7xl font-bold w-full justify-center items-center">
            No recommendations found :(
          </div>
        )}
      </Container>
      <div className="w-full flex main-container">
        <ArtistCard>
          <Image src={defaultImage} width={100} height={100} alt="Artist image" className="rounded-3xl"/>
          <div>
            <p>Artist</p>
          </div>
        </ArtistCard>
      </div>
    </>
  );
}
