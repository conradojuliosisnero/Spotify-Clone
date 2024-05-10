"use client";
import "./navbar.css";
import Logo from "../Logotipe/Logo";
import Nav from "../Nav/Nav";
import ExtraOptions from "../Extra/ExtraOptions";
import ContaineerLinks from "../ContainerLinks/ContaineerLinks";
import '@/app/styles.css'

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
