import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProcessHero from "../components/processhero";
import ProcessMain from "../components/processmain";
import ProcessBottom from "../components/processBottom";

export default function ProcessPage() {
  return (
    <div className="font-sans process-page">
      <Navbar />
      <main>
        <ProcessHero />
        <ProcessMain />
        <ProcessBottom />
      </main>
      <Footer />
    </div>
  );
}
