"use client";
import "@/styles/styles.css";
import Link from "next/link";
import Image from "next/image";
import menuItems from "@/data/dataMenu";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();

  async function handleLogout() {
    try {
      await signOut({ callbackUrl: "/" });
      console.log("Logout successful");
    } catch (error) {
      console.log(error.message);
    }
  }

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
      {session && (
        <button className="btn-primary" onClick={handleLogout}>
          Logout
        </button>
      )}
    </ul>
  );
}
