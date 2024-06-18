import Container from "@/components/Contained/Contained";
import MusicCard from "./CardSearch/Card";
import getSongs from "@/services/Spotify/songs";

export async function getServeeerSideProps() {
  const { tracks } = await getSongs();

  return { props: tracks };
}

const Home = ({ tracks }) => {
  return (
    <Container name="Home">
      {tracks?.map((track, index) => (
        <MusicCard tracks={track} key={index} />
      ))}
    </Container>
  );
};

export default Home;
