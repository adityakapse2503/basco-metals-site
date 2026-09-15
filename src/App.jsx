import { useEffect } from "react";
import Homepage from "./pages/homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/about";
import CopperGradesPage from "./pages/copper-grades-page";
import ProcessPage from "./pages/processpage";
import SellToUsPage from "./pages/sell-to-us-page";
import InquirySubmittedPage from "./pages/inquiry-submitted-page";
import Contact from "./pages/contact";

const pageMeta = {
  home: [
    "Copper Scrap Buyer | BASCO METALS",
    "BASCO METALS copper scrap purchasing website.",
  ],
  about: [
    "About BASCO METALS | BASCO METALS",
    "Learn more about BASCO METALS and our copper scrap sourcing relationships.",
  ],
  grades: [
    "Copper Grades We Buy | BASCO METALS",
    "Explore copper scrap grades purchased by BASCO METALS.",
  ],
  "sell-to-us": [
    "Sell Copper Scrap | BASCO METALS",
    "Sell copper scrap to BASCO METALS, a buyer with real factory demand.",
  ],
  process: [
    "Our Buying Process | BASCO METALS",
    "Learn how BASCO METALS handles copper scrap inquiries and purchases.",
  ],
  contact: [
    "Contact | BASCO METALS",
    "Contact BASCO METALS about selling copper scrap.",
  ],
  enquiry: [
    "Inquiry Submitted | BASCO METALS",
    "Thank you for submitting your inquiry to BASCO METALS.",
  ],
};

function getPageMeta(pathname) {
  const routeKeys = {
    "/": "home",
    "/about": "about",
    "/grades": "grades",
    "/suppliers": "sell-to-us",
    "/process": "process",
    "/contact": "contact",
    "/inquiry-submitted": "enquiry",
  };

  return pageMeta[routeKeys[pathname] || "home"];
}

export default function CopperScrapPage() {
  useEffect(() => {
    const [title, description] = getPageMeta(window.location.pathname);
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  }, []);

  if (window.location.pathname === "/about") {
    return <AboutPage />;
  }

  if (window.location.pathname === "/grades") {
    return <CopperGradesPage />;
  }

  if (window.location.pathname === "/process") {
    return <ProcessPage />;
  }

  if (window.location.pathname === "/suppliers") {
    return <SellToUsPage />;
  }

  if (window.location.pathname === "/inquiry-submitted") {
    return <InquirySubmittedPage />;
  }

  if (window.location.pathname === "/contact") {
    return <Contact />;
  }

  return (
    <div className="font-sans">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}