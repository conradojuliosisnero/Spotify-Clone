import PlaylistCard from "./playlistCard";
import "./index.css";

export default function Playlist({ create }) {
  return (
    <section className="wrapper__playlist">
      <div className="container__playlist">
        {create?.map((component, index) => (
          <PlaylistCard key={index} />
        ))}
      </div>
    </section>
  );
}
