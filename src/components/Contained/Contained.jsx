"use client";
import "@/styles/styles.css";
import { useSession } from "next-auth/react";

export default function Container({ name, children }) {
  const { data: session } = useSession();
  // funtion cut name
  function cutName(name) {
    if (name) {
      const words = name.split(" ");
      return words.slice(0, 1).join(" ");
    } else {
      return null;
    }
  }

  return (
    <div className="">
      <div className="">
        <div className="container-name">
          <h1 className="container-title">
            {name} para ti {cutName(session?.user?.name)}
          </h1>
        </div>
        <div className="container-card">{children}</div>
      </div>
    </div>
  );
}
