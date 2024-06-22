import Link from "next/link";
import Portada from "./Portada";
import Play from "./Play";

export default function Details({ children, name }) {
  return (
    <div className="">
      {/* PORTADA  */}
      <Portada/>

      {/* LIST  */}
      <Play/>

      {/* CONTEND  */}
      <>{children}</>
    </div>
  );
}
