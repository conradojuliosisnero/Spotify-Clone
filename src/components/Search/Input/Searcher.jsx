"use client";
import getSearchTracks from "@/services/search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "@/store/slices/searchSlice";
import close from "../../../../public/assets/close.svg";
import search from "../../../../public/assets/search.svg";
import Image from "next/image";
import "../styles.css";

export default function Search() {
  // States
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // update search in redux
  const dispathc = useDispatch();
  dispathc(setSearch(searchResults));

  console.log(searchResults);

  // async Functions
  async function handleSearchClick() {
    // Check if search value is empty
    if (searchValue.trim() === "") {
      setSearchValue(searchValue);
      setSearchResults([]);
      return;
    }
    setIsLoading(true);

    // Get search results
    try {
      // le pasamos el setSearchResults y el searchValue
      const results = await getSearchTracks(setSearchResults, searchValue);
      // if results ok
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
    // Stop loading
    setIsLoading(false);
  }

  // Functions
  function handleSearchInputChange(e) {
    setSearchValue(e.target.value);
  }

  // Clear Input
  function clearSearch() {
    setSearchValue("");
  }

  return (
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
