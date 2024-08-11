import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#121212] text-white">
      <div className="w-full max-w-md p-6 bg-[#1a1a1a] rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Iniciar sesión</h1>
          <p className="text-muted-foreground">
            Ingresa tus credenciales para acceder a Spotify.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-muted-foreground"
            >
              Nombre de usuario
            </label>
            <input
              id="username"
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              className="w-full px-3 py-2 bg-[#2a2a2a] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#1db954]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-muted-foreground"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              className="w-full px-3 py-2 bg-[#2a2a2a] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#1db954]"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-[#1db954] rounded-md hover:bg-[#1ed760] focus:outline-none focus:ring-2 focus:ring-[#1db954]"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link
            href="/forgot-password"
            className="text-sm text-muted-foreground hover:underline"
          >
            Olvidaste la contraseña?
          </Link>
          <span className="mx-2 text-muted-foreground">·</span>
          <Link href="/register" className="text-sm text-muted-foreground hover:underline">
            Crear una cuenta
          </Link>
        </div>
      </div>
    </div>
  );
}
