"use client";
import { useEffect, useState } from "react";
import Container from "@/components/Contained/Contained";
import MusicCard from "../MusiCard/Card";
import Image from "next/image";
import defaultImage from "../../../public/img/image.svg";
import Error from "../Error/Error";
import BaseSkeletonCard from "../Squeleton/BaseSkeleton";
import ArtistCard from "../ArtistCard/ArtistCard";
import LinkComponent from "../UI/Link/Link";
import Section from "../Section/Section";
import arroowDown from "../../../public/assets/down-arrow.svg";

export default function Home() {
  const [recommendations, setRecommendations] = useState(null);
  const [showMoreResults, setShowMoreResults] = useState(10); // Default value
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("todo"); // Default filter

  useEffect(() => {
    // Load showMoreResults from localStorage only on the client side
    const saved = localStorage.getItem("showMoreResults");
    if (saved) {
      setShowMoreResults(JSON.parse(saved));
    }
  }, []);

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

  useEffect(() => {
    // Save the current showMoreResults value to localStorage whenever it changes
    localStorage.setItem("showMoreResults", JSON.stringify(showMoreResults));
  }, [showMoreResults]);

  if (loading) {
    return <BaseSkeletonCard />;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  const filters = [
    { id: "todo", name: "Todo" },
    { id: "musica", name: "Musica" },
    { id: "podcasts", name: "Podcasts" },
  ];

  const handlerClick = (id) => {
    setActiveFilter(id); // Update active filter on click
  };

  // Funcion para mostrar más resultados
  const showMore = () => {
    setShowMoreResults((prev) => {
      const newCount = prev >= 75 ? 75 : prev + 10;
      return newCount;
    });
  };

  return (
    <>
      <div className="w-full flex">
        {filters.map((filter) => (
          <LinkComponent
            href={`/home`}
            key={filter.id}
            click={() => handlerClick(filter.id)}
            isActive={activeFilter === filter.id} // Pass active status
          >
            {filter.name}
          </LinkComponent>
        ))}
      </div>
      <Container name="Recomendaciones">
        {recommendations && recommendations.categories ? (
          recommendations.categories
            .slice(0, showMoreResults)
            .map((category, index) => (
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
      <div className="w-full flex justify-center items-center font-bold text-2xl text-white cursor-pointer">
        <Image
          src={arroowDown}
          alt="arrow"
          width={35}
          height={35}
          className="cursor-pointer"
          onClick={showMore}
        />
      </div>
      <Section name="Artistas">
        <ArtistCard>
          <Image
            src={defaultImage}
            width={100}
            height={100}
            alt="Artist image"
            className="rounded-3xl"
          />
          <div>
            <p>Artist</p>
          </div>
        </ArtistCard>
      </Section>
    </>
  );
}
