import Container from "@/components/Contained/Contained";
import MusicCard from "./CardSearch/Card";
import getSongs from "@/services/Spotify/songs";
import GlobalError from "@/app/404";

export async function getServerSideProps() {
  const { tracks } = await getSongs();
  return { props: { tracks } };
}

const Home = ({ tracks }) => {
  return (
    <Container name="Home">
      {tracks ? (
        tracks?.map((track, index) => <MusicCard track={track} key={index} />)
      ) : (
        <GlobalError/>
      )}
    </Container>
  );
};

export default Home;
