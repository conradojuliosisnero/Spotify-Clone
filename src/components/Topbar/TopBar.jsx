"use client";
import "@/app/styles.css";
import Button from "../UserButtons/Button";
import Arrow from "../ArrowsTopBar/Arrow";
import Search from "../Search/Search";
import { usePathname } from "next/navigation";
import { TrackContext } from "@/context/tracksContext";

export default function TopBar() {
  const route = usePathname();

  return (
    <div className={`topbar`}>
      {/* flechas  */}
      <Arrow />
      {route == "/search" ? <Search /> : ""}
    </div>
  );
}
