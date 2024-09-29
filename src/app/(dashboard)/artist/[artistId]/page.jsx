"use client";
import ArtistsDetails from "@/components/ArtistDetails/ArtistsDetails";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  return <ArtistsDetails params={params} />;
}
