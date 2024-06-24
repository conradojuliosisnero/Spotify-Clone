"use client";
import "../Home/styles.css";
import { useState} from "react";
import ButtonPlay from "./ButtonPlay";

export default function MusicCard({ children,styles}) {
  const [buttonHover, setButtonHover] = useState(false);

  function handlerButton() {
    setButtonHover(true);
  }

  function handlerButtonDisHover() {
    setButtonHover(false);
  }

  return (
    <div
      style={{backgroundColor:styles}}
      className="contend-card relative"
      onMouseEnter={handlerButton}
      onMouseLeave={handlerButtonDisHover}
    >
      {buttonHover && <ButtonPlay isHovered={buttonHover} />}
      <div className="card">{children}</div>
    </div>
  );
}
