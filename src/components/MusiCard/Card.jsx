"use client";
import "../Home/styles.css";
import { useState} from "react";
import ButtonPlay from "./ButtonPlay";

export default function MusicCard({ children, styles, albumId }) {
  const [buttonHover, setButtonHover] = useState(false);

  // Function set show button
  function handlerButton() {
    setButtonHover(true);
  }

  // Function set hide button
  function handlerButtonDisHover() {
    setButtonHover(false);
  }

  return (
    <div
      style={{ backgroundColor: styles }}
      className="contend-card relative"
      onMouseEnter={handlerButton}
      onMouseLeave={handlerButtonDisHover}
    >
      {buttonHover && <ButtonPlay isHovered={buttonHover} albumID={albumId} />}
      <div className="card">{children}</div>
    </div>
  );
}
