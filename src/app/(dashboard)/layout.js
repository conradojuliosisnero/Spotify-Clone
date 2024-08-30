import NavBar from "@/components/Nav/SideNavBar/NavBar";
import TopBar from "@/components/Topbar/TopBar";
import Footer from "@/components/Footer/Footer";

export default function DashboardLayout({ children }) {
  return (
    <>
      <TopBar />
      <NavBar />
      <div className="main container">
        <section className="main-content">
          <div className="bg-gradient-to-b from-white/0 via-gray-900 -z-10 to-black absolute w-full h-full top-0 left-0"></div>
          {children}
          <Footer />
        </section>
      </div>
    </>
  );
}
