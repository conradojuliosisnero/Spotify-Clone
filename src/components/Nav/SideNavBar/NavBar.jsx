import "./navbar.css";
import "@/app/styles/styles.css";
import Nav from "../Nav";
import LibrarySideBar from "./library/librarySideBar";

export default function NavBar() {
  return (
    <nav class="navbar">
      {/* options nav */}
      <Nav />
      {/* library  */}
      <LibrarySideBar />
    </nav>
  );
}
