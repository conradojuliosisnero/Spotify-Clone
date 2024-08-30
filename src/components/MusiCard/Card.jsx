"use client";
import "../Home/styles.css";
import { useState} from "react";
import ButtonPlay from "./ButtonPlay";
import Link from "next/link";

export default function MusicCard({ children, styles, albumId }) {
  const [buttonHover, setButtonHover] = useState(false);

  // Function set show button
  const handlerButton = ()=> {
    setButtonHover(true);
  }

  // Function set hide button
  const handlerButtonDisHover = ()=> {
    setButtonHover(false);
  }

  return (
    <div
      style={{ background: `linear-gradient(180deg,${styles} 0%, rgba(0, 0, 0, 0.5) 100%)` }}
      className="contend-card relative"
      onMouseEnter={handlerButton}
      onMouseLeave={handlerButtonDisHover}
    >
      {buttonHover && <ButtonPlay isHovered={buttonHover} albumID={albumId} />}
      <div className="card">
        {children}
      </div>
    </div>
  );
}
