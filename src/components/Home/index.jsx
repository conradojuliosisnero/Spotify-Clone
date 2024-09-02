"use client";
import { useEffect, useState } from "react";
import Container from "@/components/Contained/Contained";
import MusicCard from "../MusiCard/Card";
import Image from "next/image";
import defaultImage from "../../../public/img/image.svg";
import Error from "../Error/Error";
import BaseSkeletonCard from "../Squeleton/BaseSkeleton";
import LinkComponent from "../UI/Link/Link";
import arroowDown from "../../../public/assets/down-arrow.svg";
import { motion } from "framer-motion";

export default function Home() {
  const [recommendations, setRecommendations] = useState(null);
  const [showMoreResults, setShowMoreResults] = useState(10); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("todo"); 

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
    { id: "todo", name: "Todo", path: "/all" },
    { id: "musica", name: "Musica", path: "/music" },
    { id: "podcasts", name: "Podcasts", path: "/podcasts" },
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

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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
    <div>
      <div className="w-full flex sticky top-0">
        {filters.map((filter) => (
          <LinkComponent
            href={`/home/${filter.path}`}
            key={filter.id}
            click={() => handlerClick(filter.id)}
            isActive={activeFilter === filter.id} // Pass active status
          >
            {filter.name}
          </LinkComponent>
        ))}
      </div>
      <motion.div variants={container} initial="hidden" animate="visible">
        <Container name="Recomendaciones">
          {recommendations && recommendations.categories ? (
            recommendations.categories
              .slice(0, showMoreResults)
              .map((category, index) => (
                <motion.div variants={item}>
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
                </motion.div>
              ))
          ) : (
            <div className="text-7xl font-bold w-full justify-center items-center">
              No recommendations found :(
            </div>
          )}
        </Container>
      </motion.div>
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
    </div>
  );
}
