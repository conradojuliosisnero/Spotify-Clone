import Link from "next/link";

export default function Play() {
  return (
    <div className="flex bg-amber-600 w-full">
      {/* BUTTON  */}
      <Link
        className="w-24 h-24 rounded-full bg-green-500 text-black
        flex justify-center items-center m-3 hover:scale-105"
        href={""}
      >
        <svg
          fill="#000000"
          width="35px"
          height="35px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.432 7.5h4.547v17h-4.547zM9.022 7.5h4.545v17H9.022z" />
        </svg>
      </Link>
    </div>
  );
}
