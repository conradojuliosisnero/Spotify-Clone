import home from "../../public/assets/home.svg";
import search from "../../public/assets/search.svg";
import library from "../../public/assets/library.svg";
import playlist from '../../public/assets/playlist.svg'
import artist from '../../public/assets/music.svg'

const menuItems = [
  {
    href: "/",
    iconSrc: home,
    text: "Inicio",
  },
  {
    href: "/search",
    iconSrc: search,
    text: "Buscar",
  },
  {
    href: "/albums",
    iconSrc: library,
    text: "Albums",
  },
  {
    href: "/playlist",
    iconSrc: playlist,
    text: "Play List",
  },
  {
    href: "/artist",
    iconSrc: artist,
    text: "Artists",
  },
];

export default menuItems;
