export default function Skeleton() {
  return (
    <div className="flex w-full animate-pulse">
      {/* IMAGE  */}
      <div className="rounded-t-[1.1rem] overflow-hidden left-0 top-0">
        {/* ALBUM IMG  */}
        <div className="p-4 flex justify-center items-center top-0 left-0 w-full h-full z-10">
          <div className="w-72 h-72 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      {/* BOX TEXT PORTADA  */}
      <div className="flex flex-col w-full justify-start p-7 my-7 z-40">
        {/* TITLE  */}
        <div className="flex w-full justify-start">
          <div className="flex w-full h-8 bg-gray-300 rounded"></div>
        </div>
        <h1 className="flex w-full h-12 bg-gray-300 rounded mb-3"></h1>
        {/* DETAILS  */}
        <div className="flex w-full my-3 items-center">
          <div className="w-9 h-9 bg-gray-300 rounded-full mr-4"></div>
          <div className="flex w-full my-2 h-8 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
