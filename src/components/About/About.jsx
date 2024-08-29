"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-5 font-sans leading-relaxed text-white">
      <h1 className="text-center text-2xl font-bold mb-6">
        🎵 Esta Página NO es la Original de Spotify 🎵
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-4">
            ¡Hola! 😄 Antes de que te emociones demasiado, queremos dejar algo
            muy claro:
          </p>
          <strong className="text-red-400 font-semibold text-lg">
            Esta página NO es la página oficial de Spotify. 🛑
          </strong>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
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
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">
            ¿Por qué aceptar registros y logueos?
          </h2>
          <p>
            Hemos habilitado el registro y logueo de usuarios para que puedas
            probar algunas funcionalidades típicas de una aplicación web
            moderna. 💻 Pero nuevamente,{" "}
            <strong>
              esto no te dará acceso a música ni a servicios premium
            </strong>{" "}
            como en la plataforma original. 🎶
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Resumen</h2>
          <ul className="list-disc list-inside mb-4">
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
          <p>
            Esperamos que disfrutes explorando este proyecto, pero recuerda:{" "}
            <strong>¡No es la página oficial de Spotify!</strong> 😉
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full mt-6">
        <button className="btn-primary" onClick={() => router.back()}>
          Volver
        </button>
      </div>
    </div>
  );
}
