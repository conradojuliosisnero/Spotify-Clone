"use client";
import "../styles.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MusicCard({children}) {

  const [buttonHover, setButtonHover] = useState(false);

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

  return (
    <div className="contend-card">
      <div className="card">
        {children}
      </div>
    </div>
  );
}
