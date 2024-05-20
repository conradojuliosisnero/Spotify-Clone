import "@/styles/styles.css";
import Link from "next/link";
import favoriteIcon from "../../../../../public/assets/library.svg";
import Image from "next/image";
import CreatePlaylist from "../../CreatePlaylist/CreatePlaylist";
import Playlist from "../../Playlists/Playlist";
import { useState } from "react";

export default function LibrarySideBar() {
  const [newPlaylist, setNewPlaylist] = useState([]);

  function handlerPlayList() {
    setNewPlaylist([...newPlaylist, <Playlist key={newPlaylist.length} />]);
  }

  return (
    <div className="nav-library">
      <div className="wrapper__library">
        <Image
          className="icon-nav"
          src={favoriteIcon}
          alt="library-icon"
          width={20}
          height={20}
        />
        <Link href="/library" className="wrapper__link">
          Bilioteca
        </Link>
        <CreatePlaylist funtion={handlerPlayList} />
      </div>
      <Playlist create={newPlaylist} />
    </div>
  );
}
