import home from "../../public/assets/home.svg";
import search from "../../public/assets/search.svg";
import favorite from "../../public/assets/favorite.svg";

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
    href: "/library",
    iconSrc: favorite,
    text: "Tu biblioteca",
  },
];

export default menuItems;
