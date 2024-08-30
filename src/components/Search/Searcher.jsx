"use client";
import "./styles.css";
import Image from "next/image";
import search from "../../../public/assets/search.svg";
import close from "../../../public/assets/close.svg";
import getSearchTracks from "@/services/search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setResults } from "@/store/slices/searchSlice";
import { useRouter } from "next/navigation";

export default function Search() {
  // States
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter()

  const handleSearchClick = async (e) => {
    e.preventDefault();
    router.push(`/search?q=${searchValue}`)
    setIsLoading(true);
    if (searchValue.trim() === "") {
      setSearchValue(searchValue);
    }
    try {
      const response = await fetch(`/api/search?q=${searchValue}`);
      const data = await response.json();
      dispatch(setResults(data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="search-container">
      {/* Box search Input  */}
      <div className="input-search">
        {/* Search icon  */}
        <div className="icon-search">
          <Image src={search} width={26} height={26} alt="search icon"></Image>
        </div>

        {/* Input search  */}
        <input
          className="input text-xl placeholder:text-xl placeholder:text-white"
          type="text"
          value={searchValue}
          placeholder="Que quieres reproducir?"
          onChange={handleSearchInputChange}
        />
        {/* Clear Input  Icon  */}
        <div className="icon-search cursor-pointer">
          {searchValue && (
            <Image
              src={close}
              width={20}
              height={20}
              alt="search icon"
              onClick={clearSearch}
            ></Image>
          )}
        </div>
      </div>

      {/* Button Search  */}
      <button
        className="button__search"
        onClick={handleSearchClick}
        disabled={isLoading}
      >
        {isLoading ? "Buscando..." : "Buscar"}
      </button>
    </div>
  );
}

export async function getServerSideProps(props) {
  console.log(props);
  const response = await getSearchTracks(query);
  if (!response.ok) {
    const data = await response.json();
    console.log(data);
    return {
      props: { data },
    };
  }
}
