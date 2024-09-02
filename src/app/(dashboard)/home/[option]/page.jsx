"use client";
import HomeSearch from "@/components/HomeSearch/Index";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  return <HomeSearch params={params} />;
}


