import Container from "@/components/Contained/Contained";
import MusicCard from "./CardSearch/Card";
import getSongs from "@/services/Spotify/songs";
import Image from "next/image";

const Home = async () => {
  const songs = await getSongs();

  return (
    <Container name="Home">
      {songs ? (
        songs?.map((track, index) => (
          <MusicCard track={track} key={index}>
            <div className="card-img">
              <Image
                src={``}
                alt="name"
                width={100}
                height={100}
              />
            </div>
            <h2>{track.name}</h2>
            <span>{track.artists[0].name}</span>
          </MusicCard>
        ))
      ) : (
        <div className="text-7xl font-bold w-full flex justify-center">
          Not found :c
        </div>
      )}
    </Container>
  );
};

export default Home;

// export async function getStaticProps() {
//   try {
//     const songsResponse = await getSongs();
//     const dataSong = await songsResponse.json();
//     console.log(dataSong);
//       return { props: { dataSong } };
//   } catch (error) {
//     console.error("algo salio mal", error);
//   }
// }
