"use client";
import "@/styles/styles.css";
import next from '../../../../public/assets/next-arrow.svg'
import prev from "../../../../public/assets/back-arrow.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Arrow() {
  const router = useRouter();

  return (
    <div className="container-arrows">
      <button className="container-arrow-left" >
        <Image src={prev} alt="prev arrow" width={20} height={20}></Image>
      </button>
      <button className="container-arrow-right" >
        <Image src={next} alt="next arrow" width={20} height={20}></Image>
      </button>
    </div>
  );
}
