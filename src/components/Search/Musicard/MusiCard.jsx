"use client";
import "../styles.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function MusicCard() {
  const [buttonHover, setButtonHover] = useState(false);

  const search = useSelector((state) => state.searcher);

  useEffect(() => {
    function handlerButton() {
      setButtonHover(true);
    }

    function handlerButtonDisHover() {
      setButtonHover(false);
    }

    const card = document.querySelector(".contend-card");
    card.addEventListener("mouseover", handlerButton);
    card.addEventListener("mouseout", handlerButtonDisHover);

    return () => {
      card.removeEventListener("mouseenter", handlerButton);
    };
  }, []);

  // console.log(dataCard.data.coverArt.sources[0].url);
  return (
    <div className="contend-card">
      <div className="card">
        <div className="card-img">
          <Image src={""} alt="name" width={100} height={100} />
        </div>
        <h2>name song</h2>
        <p>artist</p>
      </div>
    </div>
  );
}
