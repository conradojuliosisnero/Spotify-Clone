import "./navbar.css";
import "@/app/styles/styles.css";
import Logo from "../Logotipe/Logo";
import Nav from "../Nav";
import ExtraOptions from "../Extra/ExtraOptions";
import ContaineerLinks from "../ContainerLinks/ContaineerLinks";

export default function NavBar() {
  return (
    <nav class="navbar">
      {/* logo tipe  */}
      <Logo />
      {/* options  */}
      <Nav />
      {/* extra options  */}
      <ExtraOptions />
      {/* nav links  */}
      <ContaineerLinks />
    </nav>
  );
}
