import "./navbar.css";
import "@/styles/styles.css";
import Nav from "../Nav";
import dynamic from "next/dynamic";
import LibrarySideBar from '@/components/Nav/SideNavBar/library/LibrarySideBar'

export default function NavBar() {
  return (
    <nav class="navbar">
      {/* options nav */}
      <Nav />
      {/* library  */}
      <LibrarySideBar/>
      {/* <NoSSRLibrarySideBar /> */}
    </nav>
  );
}

const NoSSRLibrarySideBar = dynamic(
  () => import("./library/librarySideBar"),
  { ssr: false }
);
