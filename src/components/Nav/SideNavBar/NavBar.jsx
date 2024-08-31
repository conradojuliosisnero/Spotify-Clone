"use client";
import "./navbar.css";
import "@/styles/styles.css";
import Nav from "../Nav";
import spotify from '../../../../public/assets/spotify.svg'
import home from '../../../../public/assets/home.svg'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {

  const router = useRouter()

  const handlerClick = () => {
    router.push('/home');
  };

  return (
    <nav className="navbar">
      <div className="w-full flex justify-between items-center px-3 pt-2">
        <Image src={spotify} alt="spotify" width={35} height={35} />
        <div className="bg-gray-600 hover:bg-gray-500 transition-background rounded-full p-2 cursor-pointer">
          <Image
            src={home}
            alt="spotify"
            width={35}
            height={35}
            onClick={handlerClick}
          />
        </div>
      </div>
      {/* options nav */}
      <Nav />
      {/* userLogo */}
    </nav>
  );
}

