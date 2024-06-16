import Container from "@/components/Contained/Contained";
import MusicCard from "./CardSearch/Card";
import getSongs from "@/services/Spotify/songs";

export async function getServerSideProps() {
  const data = await getSongs();

  if (!data || !data.tracks) {
    return {
      props: {
        canciones: null,
      },
    };
  }

  return {
    props: {
      canciones: data.tracks,
    },
  };
}

const Home = ({ canciones }) => {

  if (!canciones) {
    return <div>No songs available</div>;
  }

  return (
    <Container name="Home">
      {canciones.map((track, index) => (
        <MusicCard track={track} key={index} />
      ))}
    </Container>
  );
};

export default Home;
