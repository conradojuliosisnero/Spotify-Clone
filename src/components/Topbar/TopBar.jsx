"use client";
import "@/styles/styles.css";
import Arrow from "./ArrowsTopBar/Arrow";
import Search from "../Search/Searcher";
import { usePathname } from "next/navigation";
import AvatarUser from "./AvatarUser/Avatar";
import { useEffect } from "react";

export default function TopBar() {
  const route = usePathname();

  useEffect(() => {
    const generateRandomColor = () => {
      return Math.floor(Math.random() * 16777215).toString(16);
    };

    const applyRandomGradient = () => {
      const color1 = generateRandomColor();
      // const color2 = generateRandomColor();
      const mainContent = document.querySelector(".main-content");

      if (mainContent) {
        mainContent.style.transition = "background 0.5s ease-in-out";
        mainContent.style.background = `#${color1}`;
      } else {
        console.log("Elemento no encontrado");
      }
    };

    // Aplica el degradado al cargar la página
    applyRandomGradient();
  }, []); 

  return (
    <div className={`topbar`}>
      {/* flechas  */}
      {/* <Arrow /> */}
      <Search /> 
      {/* Avatar */}
        <AvatarUser />
    </div>
  );
}
