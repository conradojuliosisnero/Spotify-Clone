"use client";
import "@/styles/styles.css";
import Arrow from "./ArrowsTopBar/Arrow";
import Search from "../Search/Searcher";
import { usePathname } from "next/navigation";
import AvatarUser from "./AvatarUser/Avatar";

export default function TopBar() {
  const route = usePathname();
  return (
    <div className={`topbar`}>
      {/* flechas  */}
      <Arrow />
      {route == "/search" ? <Search /> : ""}
      {/* Avatar */}
        <AvatarUser />
    </div>
  );
}
