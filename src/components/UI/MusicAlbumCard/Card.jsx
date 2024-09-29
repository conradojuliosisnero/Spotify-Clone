"use client";
import { useState } from "react";
import PlayComponent from "../Play/PlayComponent";
import Link from "next/link";

export default function AlbumCard({ album, number }) {
  const [hover, setHover] = useState(false);

  function converterMs(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 60000) % 60);

    if (minutes === 0) {
      return `${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }

  const countMStoTime = converterMs(album.durationMs);

  console.log(album);

  return (
    <div
      className="w-full hover:bg-white/10 rounded-lg my-1 flex items-center p-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* NUMBER  */}
      {hover ? (
        <Link href={album.externalUrl}>
          <PlayComponent width={14} height={14} fill="#fff" />
        </Link>
      ) : (
        <div className="text-3xl text-gray-300 flex ml-4">{number + 1}</div>
      )}
      {/* CONTEND  */}
      <div className="flex w-full my-5 items-center">
        <table className="w-full">
          <tbody className="flex w-full justify-between">
            <tr className="ml-5 w-1/2">
              <td className="text-white text-2xl font-medium">
                <Link href={album.externalUrl} className="hover:underline">
                  {album.name}
                </Link>
              </td>
            </tr>
            <tr>
              <td className="text-white">{""}</td>
            </tr>
            <tr>
              <td className="text-white w-full">{countMStoTime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
