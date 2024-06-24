import Container from "@/components/Contained/Contained";
import MusicCard from "../MusiCard/Card";
import { getAlbums } from "@/services/albums";

const Albums = ({ albums }) => {
  return (
    <Container name="Albums">
      {/* <MusicCard /> */}
      {albums ? (
        albums.map((track, index) => {
          // if the album has an image, use it, otherwise use the default image
          const imageUrl =
            track.album && track.album.images && track.album.images.length > 0
              ? track.album.images[0].url
              : defaul;

          return (
            // music card component
            <MusicCard key={index}>
              <div className="card-img">
                <Image
                  src={imageUrl}
                  alt="image-abum"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="trunk-text">{track.name}</h2>
              <span>{track.artists[0].name}</span>
            </MusicCard>
          );
        })
      ) : (
        // error message in case of error
        <div className="text-7xl font-bold w-full flex justify-center">
          sources not found :c
        </div>
      )}
    </Container>
  );
};

export default Albums;

export async function getStaticProps() {
  const albums = await getAlbums();
  console.log(albums);
  return {
    props: {
      albums,
    },
  };
}
