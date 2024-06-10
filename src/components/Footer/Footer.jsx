import footerLinks from "@/data/dataFooter";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-links-footer">
        {footerLinks?.map((link, index) => (
          <div className="links-footer" key={index}>
            <h3>{link.title}</h3>
            {link.links.map((link) => (
              <Link href={link.url}>{link.text}</Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
