"use client";
import Details from "@/components/Details/Index";
import { useParams } from "next/navigation";

export default function details() {
  const params = useParams();
  return (
    <div className="overflow-hidden rounded-2xl">
      <Details params={params} />
    </div>
  );
}
