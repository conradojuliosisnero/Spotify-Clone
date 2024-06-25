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
        {artists ? (
          artists.map(
            (artist) => (
              console.log(artist),
              (
                <ArtistCard key={artist.id}>
                  {/* Image */}
                  <div className="rounded-full relative flex p-3 justify-center items-center m-2 bg-black">
                    <Image
                      src={!artist.image ? defaul : artist.images[0].url}
                      priority
                      width={100}
                      height={100}
                      alt="artist-image"
                    ></Image>
                  </div>

                  {/* Text */}
                  <div className="w-full p-3 flex flex-col justify-center items-start">
                    <h1 className="text-white text-2xl font-normal">
                      {artist.name}
                    </h1>
                    <span className="my-3 text-1xl">{artist.type}</span>
                  </div>
                </ArtistCard>
              )
            )
          )
        ) : (
          <Error />
        )}
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
