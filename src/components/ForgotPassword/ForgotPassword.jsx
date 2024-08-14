"use client";
import Link from "next/link";
import { useState } from "react";
export default function Component() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (email === "") {
      setError("Por favor, introduce tu correo electrónico.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.status === "ok") {
        setSuccess(data.message);
        setEmail("");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Ocurrio un error al enviar el correo de restablecimiento.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#1a1a1a] rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Recuperar contraseña
        </h1>
        {success ? (
          <p className="">
            te hemos enviado un correo para restablecer tu contraseña revisa tu
            bandeja de entrada
          </p>
        ) : (
          <>
            <p className="text-white mb-6">
              Ingresa tu correo electrónico y te enviaremos instrucciones para
              restablecer tu contraseña.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-white font-medium">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@email.com"
                  className="bg-[#2a2a2a] rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1db954]"
                //   required
                />
              </div>
              <button
                type="submit"
                className="bg-[#1db954] text-white rounded-md px-4 py-2 w-full hover:bg-[#1ed760] transition-all"
              >
                {loading ? "Cargando..." : "Enviar correo"}
              </button>
            </form>
          </>
        )}
        {error && <p className="text-red-500">{error}</p>}
        <div className="mt-4 text-center">
          <Link href="/" className="text-white hover:underline">
            Volver a iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
