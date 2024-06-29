import Image from "next/image";

export default function Portada({ image, name }) {

  return (
    <div className="flex w-full bg-slate-600">
      {/* IMAGE  */}
      <div className="bg-red-500 p-4 flex justify-center items-center">
        <Image
          className=""
          src={image}
          width={100}
          height={100}
          alt="portada-image-album-details"
        ></Image>
      </div>

      {/* BOX TEXT PORTADA  */}
      <div className="flex flex-col w-full justify-start p-7 my-7">
        {/* TITTLE  */}
        <div className="flex w-full justify-start">
          <span className="flex w-full text-2xl">Album</span>
        </div>
        <h1 className="flex w-full text-white text-9xl font-bold">Album Name</h1>
        {/* DETAILS  */}
        <div className="flex w-full my-3 bg-black">
          <span className="flex w-full my-2 text-2xl font-semibold">2 canciones</span>
        </div>
      </div>
    </div>
  );
}
