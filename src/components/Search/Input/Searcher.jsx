"use client";
import "../styles.css";
import Image from "next/image";
import search from "../../../../public/assets/search.svg";
import close from "../../../../public/assets/close.svg";
import getSearchTracks from "@/services/search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "@/store/slices/searchSlice";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispathc = useDispatch();
  dispathc(setSearch(searchResults));

  async function handleSearchClick() {
    if (searchValue.trim() === "") {
      setSearchValue(searchValue);
      setSearchResults([]);
      return;
    }
    setIsLoading(true);
    try {
      const results = await getSearchTracks(setSearchResults, searchValue);
      if (results.ok) {
        const data = await results.json();
        setSearchResults(data);
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Error al buscar:", error);
    }
    setIsLoading(false);
  }

  function handleSearchInputChange(e) {
    setSearchValue(e.target.value);
  }

  function clearSearch() {
    setSearchValue("");
  }

  return (
    // container
    <div className="search-container">
      {/* Box search Input  */}
      <div className="input-search">
        {/* Search icon  */}
        <div className="icon-search">
          <Image src={search} width={20} height={20} alt="search icon"></Image>
        </div>

        {/* Input search  */}
        <input
          className="input"
          type="text"
          value={searchValue}
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
