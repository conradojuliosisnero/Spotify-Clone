"use client";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Providers } from "./Providers";

const rubik = Rubik({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={rubik.className}>
          <Providers>
            {children}
          </Providers>
        </body>
      </Provider>
    </html>
  );
}
