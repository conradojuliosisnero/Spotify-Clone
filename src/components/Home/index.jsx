import Container from "@/components/Contained/Contained";
import MusicCard from "../MusiCard/Card";
import getRecomendations from "@/services/recomendations";
import Image from "next/image";
import defaul from "../../../public/img/image.svg";
import ArtistContainer from "@/components/ArtistContainer/Container";
import ArtistCard from "../ArtistCard/ArtistCard";
import getArtist from "@/services/artist";
import Error from "../Error/Error";

export default async function Home() {
  // get recomendations
  const { browseStart } = await getRecomendations();
  const recomendations = browseStart.sections.items && browseStart.sections.items[0].sectionItems;

  // get artists
  const { artists } = await getArtist();

  return (
    <>
      {/* ARTIST CONTAINER  */}

      <ArtistContainer name="Artistas">
        {/* Artist Card */}

      </ArtistContainer>

      {/* RECOMENDATIONS CONTAINER  */}

      <Container name="Recomendaciones">
        {recomendations ? (
          recomendations.items.slice(0, 15).map((track, index) => {
            // verification of the recomendation song name
            const songName = track.content.data.data
              ? track.content.data.data.cardRepresentation.title
                  .transformedLabel
              : track.content.data.title.transformedLabel;

            // verification of the recomendation song image
            const imageUrl =
              track.content.data.data &&
              track.content.data.data.cardRepresentation.artwork.sources[0].url;

            // backgroundColor card
            const backgroundColor =
              track.content.data.data &&
              track.content.data.data.cardRepresentation.backgroundColor.hex;

            return (
              <MusicCard key={index} styles={backgroundColor}>
                <div className="card-img">
                  <Image
                    src={imageUrl ? imageUrl : defaul}
                    alt="image-abum"
                    width={100}
                    height={100}
                    quality={60}
                  />
                </div>
                <h2 className="trunk-text">{songName}</h2>
              </MusicCard>
            );
          })
        ) : (
          <div className="text-7xl font-bold w-full flex justify-center">
            Sources not found :c
          </div>
        )}
      </Container>
    </>
  );
}
