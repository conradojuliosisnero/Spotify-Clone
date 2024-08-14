import { Rubik } from "next/font/google";
import "./globals.css";
import { ProvidersNextUI } from "./Providers";
import { NextAuthProvider } from "@/auth/Provider";
import { ReduxProvider } from "@/providers/Provider";

const rubik = Rubik({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ReduxProvider>
          <NextAuthProvider>
            <ProvidersNextUI>{children}</ProvidersNextUI>
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
