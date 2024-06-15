import Container from "@/components/Contained/Contained";
import MusicCard from "./CardSearch/Card";
import getSongs from "@/services/Spotify/songs";

export default async function Home() {
  const {tracks} = await getSongs();

  console.log(tracks[0].album)

  return (
    <Container name="Home">
      {SONGS?.tracks?.map((track, index) => (
        <MusicCard track={track} key={index} />
      ))}
    </Container>
  );
}
