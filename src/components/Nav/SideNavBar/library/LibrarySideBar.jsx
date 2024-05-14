import "@/app/styles/styles.css";
import Link from "next/link";
import favoriteIcon from "../../../../../public/assets/library.svg";
import Image from "next/image";
import CreatePlaylist from "../../CreatePlaylist/CreatePlaylist";

export default function LibrarySideBar() {
  return (
    <div className="nav-library">
      <Image
        className="icon-nav"
        src={favoriteIcon}
        alt="library-icon"
        width={20}
        height={20}
      />
      <Link href="/library">Bilioteca</Link>
    </div>
  );
}
