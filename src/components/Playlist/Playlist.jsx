import Container from "../Contained/Contained";
import MusicCard from "../MusiCard/Card";

const Playlist = () => {
  return (
    <Container name="Play List">
      <MusicCard />
      <MusicCard />
      <MusicCard />
    </Container>
  );
};

export default Playlist;
