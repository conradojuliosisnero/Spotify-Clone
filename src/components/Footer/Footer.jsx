import footerLinks from "@/data/dataFooter";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-links-footer">
        {footerLinks?.map((link, index) => (
          <div className="links-footer" key={index}>
            <h3>Empresa</h3>
            <Link href="#">Acerca de</Link>
            <Link href="#">Empleo</Link>
            <Link href="#">For the Record</Link>
          </div>
        ))}
      </div>
    </footer>
  );
}
