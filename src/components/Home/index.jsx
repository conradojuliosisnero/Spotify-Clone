import Container from "@/components/Contained/Contained";
import MusicCard from "./CardSearch/Card";

export default function Home() {
  return (
    <Container name="Home">
      <MusicCard />
      <MusicCard />
      <MusicCard />
    </Container>
  );
}
