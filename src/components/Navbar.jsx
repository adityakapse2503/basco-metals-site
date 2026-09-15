import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["Sell to Us", "/suppliers"],
  ["Copper Grades", "/grades"],
  ["Our Process", "/process"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
];

function getActiveLink() {
  if (window.location.pathname === "/about") {
    return "/about";
  }

  if (window.location.pathname === "/grades") {
    return "/grades";
  }

  if (window.location.pathname === "/process") {
    return "/process";
  }

  if (window.location.pathname === "/suppliers") {
    return "/suppliers";
  }

  if (window.location.pathname === "/contact") {
    return "/contact";
  }

  return links.some(([, href]) => href === window.location.hash)
    ? window.location.hash
    : "/";
}

function getDestination(href) {
  if (href.startsWith("#") && window.location.pathname !== "/") {
    return `/${href}`;
  }

  return href;
}

function Brand({ light = false }) {
  return (
    <span className={`brand ${light ? "brand--light" : ""}`}>
      <img
        className="brand__image"
        src={light ? "/images/basco-metals-logo.png" : "/images/logo.png"}
        alt="Basco Metals"
      />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(getActiveLink);

  useEffect(() => {
    const updateActiveLink = () => setActiveLink(getActiveLink());

    window.addEventListener("popstate", updateActiveLink);
    window.addEventListener("hashchange", updateActiveLink);

    return () => {
      window.removeEventListener("popstate", updateActiveLink);
      window.removeEventListener("hashchange", updateActiveLink);
    };
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <a className="site-header__brand" href="/" aria-label="Basco Metals home">
        <Brand />
      </a>
      <button
        className="site-header__menu"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav
        className={`site-nav ${open ? "site-nav--open" : ""}`}
        aria-label="Primary navigation"
      >
        {links.map(([label, href]) => {
          const destination = getDestination(href);

          return (
            <a
              key={label}
              className={`site-nav__link ${activeLink === href ? "site-nav__link--active" : ""}`}
              href={destination}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </a>
          );
        })}
        <a
          className="site-nav__cta"
          href="/suppliers"
          onClick={() => setOpen(false)}
        >
          SELL COPPER SCRAP <ArrowRight size={17} />
        </a>
      </nav>
      <a className="site-header__cta" href="/suppliers">
        SELL COPPER SCRAP <ArrowRight size={17} />
      </a>
    </header>
  );
}

export { Brand };
