"use client";
import "./styles.css";
import Image from "next/image";
import search from "../../../public/assets/search.svg";
import close from "../../../public/assets/close.svg";
import getSearchTracks from "@/services/search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "@/store/slices/searchSlice";
import { useRouter } from "next/navigation";
import { setRecentSearch } from "@/store/slices/recentSearchSlice";

export default function Search() {
  // States
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const recentSearches = useSelector((state) => state.searchBrowser);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (searchValue.trim() !== "") {
      // Despacha la búsqueda actual al reducer
      dispatch(setRecentSearch(searchValue));
    }
  }, [dispatch]);

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      setIsLoading(true);
      router.push(`/search?q=${searchValue}`);
      try {
        const response = await fetch(`/api/search?q=${searchValue}`);
        const data = await response.json();
        dispatch(setResults(data));

        // Despacha la búsqueda reciente
        dispatch(setRecentSearch(searchValue));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      return;
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
      {/* Box search Input */}
      <div className="input-search">
        {/* Search icon */}
        <div className="icon-search">
          <Image src={search} width={26} height={26} alt="search icon" />
        </div>

        {/* Input search */}
        <input
          className="input text-xl placeholder:text-xl placeholder:text-white"
          type="text"
          value={searchValue}
          placeholder="¿Qué quieres reproducir?"
          onChange={handleSearchInputChange}
        />

        {/* Clear Input Icon */}
        <div className="icon-search cursor-pointer">
          {searchValue && (
            <Image
              src={close}
              width={20}
              height={20}
              alt="clear icon"
              onClick={clearSearch}
            />
          )}
        </div>
      </div>

      {/* Button Search */}
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
