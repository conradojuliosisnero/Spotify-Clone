"use client";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  return <div>page</div>;
}
