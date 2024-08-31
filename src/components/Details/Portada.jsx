import Image from "next/image";
import spootify from '../../../public/assets/spotify-green.svg'

export default function Portada({ image, name, title }) {

  return (
    <div className="flex w-full">
      {/* IMAGE  */}
      <div className="w-full h-[22em] absolute z-10 rounded-t-[1.1rem] overflow-hidden left-0 top-0">
        <div className="p-4 flex justify-center items-center top-0 left-0 w-full h-full z-10">
          <Image
            className="w-full h-full"
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
          <span className="flex w-full text-2xl hover:underline cursor-pointer">{title}</span>
        </div>
        <h1 className="flex w-full text-white text-9xl font-bold ">{name}</h1>
        {/* DETAILS  */}
        <div className="flex w-full my-3 items-center">
          <Image
            src={spootify}
            alt="spotify"
            width={35}
            height={35}
            className="mr-4"
          ></Image>
          <span className="flex w-full my-2 text-2xl font-semibold">
            2 canciones
          </span>
        </div>
      </div>
    </div>
  );
}
