"use client";
import "../Home/styles.css";
import { useEffect, useState } from "react";
import ButtonPlay from "./ButtonPlay";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function MusicCard({ children, styles, albumId }) {
  const [buttonHover, setButtonHover] = useState(false);
  const [sanitAlbumId, setSanitAlbumId] = useState("");

  useEffect(() => {
    if (albumId) {
      setSanitAlbumId(albumId?.split(":")[2]);
    }
  }, [albumId]);

  const handlerButton = () => {
    setButtonHover(true);
  };

  const handlerButtonDisHover = () => {
    setButtonHover(false);
  };

  const animateButton = {
    initial: {
      scale: 0,
      opacity: 0,
      transform: "translateY(20px)",
    },
    animate: {
      scale: 1,
      opacity: 1,
      transform: "translateY(0px)",
    },
    exit: {
      scale: 0,
      opacity: 0,
      transform: "translateY(20px)",
    },
  };

  const router = useRouter();

  const handleClick = () => {
    router.push(`/albums/${sanitAlbumId}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        background: `linear-gradient(180deg,${styles} 0%, rgba(0, 0, 0, 0.5) 100%)`,
      }}
      className="contend-card relative"
      onMouseEnter={handlerButton}
      onMouseLeave={handlerButtonDisHover}
    >
      <div className="card relative">
        {children}
        <AnimatePresence>
          {buttonHover && (
            <motion.div
              className="absolute bottom-1/4 right-2 flex items-center justify-center"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={animateButton}
              transition={{ duration: 0.2 }}
            >
              <ButtonPlay isHovered={buttonHover} albumID={albumId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
