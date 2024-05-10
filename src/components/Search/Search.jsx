import "./search.css";
import Image from "next/image";
import search from "../../../public/assets/search.svg";
import close from "../../../public/assets/close.svg";
import getSearchTracks from "@/services/SearchTracks/searchTracks";
import { useState } from "react";
import { useContext } from "react";
import { TrackContext } from "@/context/tracksContext";

export default function Search() {
  const [valueSearch, setValueSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false); // Nuevo estado para controlar si el usuario está buscando

  const { setTracks } = useContext(TrackContext);

  // Función para realizar la búsqueda
  async function searchTracks() {
    if (!valueSearch.trim()) return; // Evita buscar si el campo está vacío
    try {
      const data = await getSearchTracks(setTracks, valueSearch);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  }

  function handlerSearch(e) {
    setValueSearch(e.target.value);
  }

  function clearSearch() {
    setValueSearch("");
  }

  // Ejecuta la búsqueda cuando se hace clic en el botón de búsqueda
  function handleSearchClick() {
    setIsSearching(true);
    searchTracks();
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
          value={valueSearch}
          onChange={handlerSearch}
        />
        <div className="icon-search">
          {valueSearch ? (
            <Image
              src={close}
              width={20}
              height={20}
              alt="search icon"
              onClick={clearSearch}
            ></Image>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* Botón de búsqueda */}
      <button onClick={handleSearchClick} disabled={!valueSearch.trim()}>
        Buscar
      </button>
    </div>
  );
}
