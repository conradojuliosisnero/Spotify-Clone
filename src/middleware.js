import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Si el usuario está autenticado y trata de acceder a "/", redirigirlo a "/home" o cualquier otra ruta protegida
  if (token && pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // Si el usuario no está autenticado y trata de acceder a rutas protegidas, redirigirlo al login
  if (
    !token &&
    [
      "/home",
      "/search",
      "/albums",
      "/playlist",
      "/artist",
      "/tracks/:id*",
    ].some((route) => pathname.startsWith(route))
  ) {
    const loginUrl = new URL("/api/auth/signin", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Permitir el acceso si cumple con las condiciones anteriores
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/home",
    "/search",
    "/albums",
    "/playlist",
    "/artist",
    "/tracks/:id*",
  ],
};
