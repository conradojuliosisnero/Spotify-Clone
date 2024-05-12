import "@/app/styles/styles.css";
import MusicCard from "../Musicard/Musicard";

export default function Container() {
  return (
    <>
      <div className="container-name">
        <h1 className="container-title">Busqueda</h1>
      </div>
      <div className="container-card">
        <MusicCard />
      </div>
    </>
  );
}
