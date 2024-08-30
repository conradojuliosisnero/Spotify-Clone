import "./navbar.css";
import "@/styles/styles.css";
import Nav from "../Nav";
import spotify from '../../../../public/assets/spotify.svg'
import home from '../../../../public/assets/home.svg'
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="w-full flex justify-between items-center px-3 pt-2">
        <Image src={spotify} alt="spotify" width={35} height={35} />
        <div className="bg-white rounded-full p-2">
          <Image src={home} alt="spotify" width={35} height={35} />
        </div>
      </div>
      {/* options nav */}
      <Nav />
      {/* userLogo */}
    </nav>
  );
}

