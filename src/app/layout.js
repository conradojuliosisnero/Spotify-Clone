"use client";
import { Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/SideNavBar/NavBar";
import TopBar from "@/components/Topbar/TopBar";
import Footer from "@/components/Footer/Footer";
import Providers from "@/features/provider/Providers";

const rubik = Rubik({
  weight: ['400','500','600'],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={rubik.className}>
          <TopBar />
          <NavBar />
          <div className="main container">
            <section className="main-content">
              {children}
              <Footer />
            </section>
          </div>
        </body>
      </Providers>
    </html>
  );
}
