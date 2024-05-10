"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/SideNavBar/NavBar";
import TopBar from "@/components/Topbar/TopBar";
import Footer from "@/components/Footer/Footer";
import ContextTracks from "@/context/ContextTracks";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextTracks>
        <body>
          <TopBar />
          <NavBar />
          <div className="main container">
            <section className="main-content">
              {children}
              <Footer />
            </section>
          </div>
        </body>
      </ContextTracks>
    </html>
  );
}
