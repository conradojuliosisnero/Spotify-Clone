import "@/styles/styles.css";
import next from '../../../../public/assets/next-arrow.svg'
import prev from "../../../../public/assets/back-arrow.svg";
import Image from "next/image";
import { useState } from "react";

export default function Arrow() {

  const [nextSong, setNext] = useState(1)

  function handerNext() {
    setNext(nextSong + 1);
  }

  return (
    <div className="container-arrows">
      <button className="container-arrow-left" onClick={handerNext}>
        <Image src={prev} alt="prev arrow" width={20} height={20}></Image>
      </button>
      <button className="container-arrow-right" onClick={(event)=> handerNext - 1}>
        <Image src={next} alt="next arrow" width={20} height={20}></Image>
      </button>
    </div>
  );
}
