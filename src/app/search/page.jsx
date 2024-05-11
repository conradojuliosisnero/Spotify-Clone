"use client";
import Container from "@/components/Contained/Container";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function page() {
  return (
    <main className="main-content">
      <Container name={"Busqueda"} />
    </main>
  );
}
