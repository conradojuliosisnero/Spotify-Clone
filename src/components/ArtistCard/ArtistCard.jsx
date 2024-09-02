import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ButtonPlay from "../MusiCard/ButtonPlay";

export default function ArtistCard({ children , albumId }) {
  const [buttonHover, setButtonHover] = useState(false);
  const [sanitAlbumId, setSanitAlbumId] = useState("");

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
      onMouseEnter={handlerButton}
      onMouseLeave={handlerButtonDisHover}
      className="gap-4 cursor-pointer flex flex-col items-center justify-center rounded-3xl bg-gray-900 hover:bg-gray-800 transition-all p-3"
    >
      {children}
      <div className="relative">
        <AnimatePresence>
          {buttonHover && (
            <motion.div
              className="absolute -top-44 -right-28 flex items-center justify-center"
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
