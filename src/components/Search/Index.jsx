import Container from "@/components/Contained/Contained";
import Image from "next/image";
import MusicCard from "../MusiCard/Card";
import { useSelector } from "react-redux";
import searchSlice from "@/store/slices/searchSlice";

export default function Search() {

  return (
    <Container name="Buscar">
      {/* <MusicCard /> */}
      {track ? (
        track.map((track, index) => {
          const imageUrl =
            track.album && track.album.images && track.album.images.length > 0
              ? track.album.images[0].url
              : defaul;

          return (
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
        <div className="text-7xl font-bold w-full flex justify-center">
          Sources not found :c
        </div>
      )}
    </Container>
  );
}
