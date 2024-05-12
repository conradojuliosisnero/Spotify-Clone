import "@/app/styles/styles.css";
import next from '../../../../public/assets/next-arrow.svg'
import prev from "../../../../public/assets/back-arrow.svg";
import Image from "next/image";

export default function Arrow() {
  return (
    <div className="container-arrows">
      <div className="container-arrow-left">
        <Image src={prev} alt="prev arrow" width={20} height={20}></Image>
      </div>
      <div className="container-arrow-right">
        <Image src={next} alt="next arrow" width={20} height={20}></Image>
      </div>
    </div>
  );
}
