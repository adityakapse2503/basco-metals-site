import { Mail, MapPin, Phone } from "lucide-react";
import { Brand } from "./Navbar";

const quickLinks = [
  ["Home", "/"],
  ["Sell to Us", "/suppliers"],
  ["Copper Grades", "/grades"],
  ["Our Process", "/process"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
];

function getDestination(href) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <Brand light />
        </div>
        <div className="site-footer__column">
          <h2>QUICK LINKS</h2>
          <nav aria-label="Footer navigation">
            {quickLinks.map(([label, href]) => (
              <a key={label} href={getDestination(href)}>{label}</a>
            ))}
          </nav>
        </div>
        <div className="site-footer__column site-footer__contact" id="contact">
          <h2>CONTACT US</h2>
          <p><MapPin size={15} />118-21 Queens Boulevard, Suite 413<br />Forest Hills, NY 11375</p>
          <a href="tel:+19176273000"><Phone size={15} />917-627-3000</a>
          <a href="mailto:jb@bascometals.com"><Mail size={15} />jb@bascometals.com</a>
        </div>
        <div className="site-footer__column site-footer__mission">
          <h2>OUR MISSION</h2>
          <p>To build a dependable global supply network connecting quality copper scrap suppliers with real industrial demand.</p>
          <div className="site-footer__signoff">Scrap Today.<br />Resources Tomorrow.<span /></div>
        </div>
      </div>
      <div className="site-footer__bar">
        <span>&copy; 2024 BASCO METALS. All rights reserved.</span>
        <div>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a className="site-footer__linkedin" href="/linkedin" aria-label="LinkedIn">in</a>
        </div>
      </div>
    </footer>
  );
}
