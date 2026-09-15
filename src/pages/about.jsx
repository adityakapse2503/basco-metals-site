import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/abouthero";
import AboutOurStory from "../components/aboutoutstory";

export default function AboutPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <main style={{ backgroundColor: "#fff" }}>
        <AboutHero />
        <AboutOurStory />
      </main>
      <Footer />
    </div>
  );
}