"use client";
import "../styles.css";
import Image from "next/image";
import search from "../../../../public/assets/search.svg";
import close from "../../../../public/assets/close.svg";
import getSearchTracks from "@/services/SearchTracks/searchTracks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "@/features/songSlice";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="search-container">
      <div className="input-search">
        <div className="icon-search">
          <Image src={search} width={20} height={20} alt="search icon"></Image>
        </div>
        <input
          className="input"
          type="text"
          value={searchValue}
          onChange={handleSearchInputChange}
        />
        <div className="icon-search">
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
