import "@/app/styles/styles.css";
import Link from "next/link";
import favoriteIcon from "../../../../../public/assets/library.svg";
import add from "../../../../../public/assets/add.svg";
import Image from "next/image";
import ExtraOptions from "../../Extra/ExtraOptions";

export default function LibrarySideBar() {
  return (
    <section className="nav-library">
      <div>
        <Link href="/library">
          <Image
            className="icon-nav"
            src={favoriteIcon}
            alt="library-icon"
            width={20}
            height={20}
          />
          Bilioteca
        </Link>
        <button class="btn-create-list">
          <Image
            className="icon-nav"
            src={add}
            alt="add"
            width={20}
            height={20}
          ></Image>
        </button>
        {/* <div> */}
          {/* <ExtraOptions /> */}
        {/* </div> */}
      </div>
    </section>
  );
}
