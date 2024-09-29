"use client";
import Link from "next/link";
import { useState } from "react";
import playIcon from "../../../public/img/play.svg";
import PlayComponent from "../UI/Play/PlayComponent";

export default function Play({ link}) {
  const [hoverPlay, setHoverPlay] = useState(false)

  function handlePlay() { 
    setHoverPlay(!hoverPlay)
  }

  return (
    <div className="flex w-full">
      {/* BUTTON  */}
      <Link
        className="w-24 h-24 rounded-full bg-green-500 text-black
        flex justify-center items-center m-3 hover:scale-105"
        href={""}
        onClick={handlePlay}
      >
        {hoverPlay ? (
          <>
            <PlayComponent width="25px" height="25px"/>
          </>
        ) : (
          <>
            <svg
              fill="#000000"
              width="35px"
              height="35px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.432 7.5h4.547v17h-4.547zM9.022 7.5h4.545v17H9.022z" />
            </svg>
          </>
        )}
      </Link>
    </div>
  );
}
