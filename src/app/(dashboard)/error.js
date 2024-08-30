"use client";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-white text-3xl font-bold tracking-tight sm:text-4xl">
          Oops, algo salió mal
        </h1>
        <p className="mt-4 text-muted-foreground">
          Lo sentimos, pero ha ocurrido un error inesperado. Vuelve a intentarlo
          más tarde.
        </p>
        <div className="mt-6">
          <Link
            href="#"
            className="inline-flex items-center rounded-md bg-white bg-opacity-20 px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
            onClick={() => window.location.reload()}
          >
            Volver a intentar
          </Link>
        </div>
      </div>
    </div>
  );
}
