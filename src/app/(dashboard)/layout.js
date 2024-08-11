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
          {children}
          <Footer />
        </section>
      </div>
    </>
  );
}
