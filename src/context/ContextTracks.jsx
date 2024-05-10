import { useState } from "react";
import { TrackContext } from "./tracksContext";

export default function ContextTracks({ children }) {
  const [tracks, setTracks] = useState([]);
    console.log(tracks);
  return (
    <TrackContext.Provider value={{ tracks, setTracks }}>
      {children}
    </TrackContext.Provider>
  );
}
