import "@/app/styles/styles.css";
import MusicCard from "../CardSearch/Card";

export default function Container({ name }) {
  return (
    <>
      <div className="container-name">
        <h1 className="container-title">{name}</h1>
      </div>
      <div className="container-card">
        <MusicCard />
      </div>
    </>
  );
}
