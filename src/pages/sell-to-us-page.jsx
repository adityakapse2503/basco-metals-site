import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SellToUsBanner from "../components/sell-to-us-banner";
import SellToUsMain from "../components/sell-to-us-main";
import SellToUsBottom from "../components/sell-to-us-bottom";

export default function SellToUsPage() {
  return (
    <div className="font-sans sell-to-us-page">
      <Navbar />
      <main style={{ backgroundColor: "#fff" }}>
        <SellToUsBanner />
        <SellToUsMain />
        <SellToUsBottom />
      </main>
      <Footer />
    </div>
  );
}