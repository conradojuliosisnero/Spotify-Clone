"use client";
import { useRouter } from "next/navigation";
export default function About() {
  const router = useRouter();
  return (
    <div className="max-w-xl mx-auto p-5 font-sans leading-relaxed text-white">
      <h1 className="text-center text-2xl font-bold mb-6">
        🎵 Esta Página NO es la Original de Spotify 🎵
      </h1>

      <section className="mb-8">
        <p className="text-lg mb-4">
          ¡Hola! 😄 Antes de que te emociones demasiado, queremos dejar algo muy
          claro:
        </p>
        <strong className="text-red-400 font-semibold text-lg">
          Esta página NO es la página oficial de Spotify. 🛑
        </strong>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">¿Qué es esta página?</h2>
        <p>
          Este es un proyecto personal creado con <strong>Next.js</strong>,
          diseñado solo para fines educativos y de aprendizaje. 🧑‍💻{" "}
          <strong>
            No está afiliado ni asociado con Spotify en ningún sentido.
          </strong>{" "}
          Aunque puedes registrarte y loguearte,{" "}
          <strong>no podrás escuchar música gratis aquí</strong>. 🎧
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          ¿Por qué aceptar registros y logueos?
        </h2>
        <p>
          Hemos habilitado el registro y logueo de usuarios para que puedas
          probar algunas funcionalidades típicas de una aplicación web moderna.
          💻 Pero nuevamente,{" "}
          <strong>
            esto no te dará acceso a música ni a servicios premium
          </strong>{" "}
          como en la plataforma original. 🎶
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Resumen</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>No es Spotify</strong>: Es solo un proyecto personal.
          </li>
          <li>
            <strong>No música gratis</strong>: No puedes escuchar música aquí.
          </li>
          <li>
            <strong>Educativo</strong>: Es solo para practicar y aprender.
          </li>
        </ul>
        <p className="mt-4">
          Esperamos que disfrutes explorando este proyecto, pero recuerda:{" "}
          <strong>¡No es la página oficial de Spotify!</strong> 😉
        </p>
      </section>
      <div className="flex justify-center w-full">
        <button
          className="py-4 px-7 text-white font-semibold rounded bg-[#1db954] hover:bg-[#1ed760] transition-all"
          onClick={() => router.back()}
        >
          Volver
        </button>
      </div>
    </div>
  );
}
