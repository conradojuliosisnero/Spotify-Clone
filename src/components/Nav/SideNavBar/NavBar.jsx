import "./navbar.css";
import "@/app/styles/styles.css";
import Nav from "../Nav";
import dynamic from "next/dynamic";

export default function NavBar() {
  return (
    <nav class="navbar">
      {/* options nav */}
      <Nav />
      {/* library  */}
      <NoSSRLibrarySideBar />
    </nav>
  );
}

const NoSSRLibrarySideBar = dynamic(
  () => import("./library/librarySideBar"),
  { ssr: false }
);
