import "@/styles/styles.css";
import Link from "next/link";
import Image from "next/image";
import menuItems from "@/data/dataMenu";

export default function Nav() {
  return (
    <ul className="nav-main">
      {menuItems?.map((link, index) => (
        <li key={index}>
          <Link href={link.href}>
            <Image
              className="icon-nav"
              src={link.iconSrc}
              alt="home"
              width={20}
              height={20}
            ></Image>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
