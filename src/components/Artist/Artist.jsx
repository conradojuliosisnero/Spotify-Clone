import Container from "../Contained/Contained";
import MusicCard from "../MusiCard/Card";

const Artist = () => {
  return (
    <Container name="Artist">
      <MusicCard />
      <MusicCard />
      <MusicCard />
    </Container>
  );
};

export default Artist;
