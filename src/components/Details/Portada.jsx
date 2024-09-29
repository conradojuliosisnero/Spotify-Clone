import Image from "next/image";
import spotify from "../../../public/assets/spotify-green.svg";

export default function Portada({ image, name, title, minutes, tracks }) {
  function countTracks(tracks) {
    if (tracks) {
      const total = tracks.length;
      return total;
    } else {
      return 0;
    }
  }

  function countMinutes(minutes) {
    if (minutes) {
      const time = minutes.reduce(
        (accumulator, currentValue) => accumulator + currentValue.time,
        0
      );
      return time;
    } else {
      return 0;
    }
  }

  function coverterMs(ms) {
    const seconds = Math.floor((ms / 1000) % 60); 
    const minutes = Math.floor((ms / 60000) % 60); 
    const hours = Math.floor(ms / 3600000); 

    if (hours === 0) {
      return `${minutes} min ${seconds}s`;
    } else {
      return `${hours}h ${minutes} min ${seconds}s`;
    }
  }

  const countMinute = countMinutes(minutes);
  const totalCountDurationAlbum = coverterMs(countMinute);


  return (
    <div className="flex w-full">
      {/* IMAGE  */}
      <div className="rounded-t-[1.1rem] overflow-hidden left-0 top-0">
        {/* ALBUM IMG  */}
        <div className="p-4 flex justify-center items-center top-0 left-0 w-full h-full z-10">
          <Image
            className="w-72 rounded-lg"
            src={image}
            width={100}
            height={100}
            alt="portada-image-album-details"
          ></Image>
        </div>
      </div>

      {/* BOX TEXT PORTADA  */}
      <div className="flex flex-col w-full justify-start p-7 my-7 z-40">
        {/* TITTLE  */}
        <div className="flex w-full justify-start">
          <span className="flex w-full text-2xl hover:underline cursor-pointer">
            {title}
          </span>
        </div>
        <h1 className="flex w-full text-white text-9xl font-bold ">{name}</h1>
        {/* DETAILS  */}
        <div className="flex w-full my-3 items-center">
          <Image
            src={spotify}
            alt="spotify"
            width={35}
            height={35}
            className="mr-4"
          ></Image>
          <span className="flex w-full my-2 text-2xl text-gray-300 font-light">
            {countTracks(tracks)} canciones , {totalCountDurationAlbum}
          </span>
        </div>
      </div>
    </div>
  );
}
