import "@/app/styles/styles.css";
import CardLibrary from "../Card/CardLibrary";

export default function Container({ name }) {
  return (
    <>
      <div className="container-name">
        <h1 className="container-title">{name}</h1>
      </div>
      <div className="container-card">
        <CardLibrary />
      </div>
    </>
  );
}
