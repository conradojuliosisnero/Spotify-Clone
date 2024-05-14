import "./navbar.css";
import "@/app/styles/styles.css";
import Nav from "../Nav";
import LibrarySideBar from "./library/librarySideBar";
import ExtraOptions from "../Extra/ExtraOptions";
import ContaineerLinks from "../ContainerLinks/ContaineerLinks";

export default function NavBar() {
  return (
    <nav class="navbar">
      {/* options  */}
      <Nav />
      {/* library  */}
      <LibrarySideBar />
    </nav>
  );
}
