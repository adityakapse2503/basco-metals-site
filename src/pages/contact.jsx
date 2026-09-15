import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/contact-hero";
import ContactForm from "../components/contact-form";

export default function Contact() {
  return (
    <div className="font-sans contact-page">
      <Navbar />
      <main style={{ backgroundColor: "#fff" }}>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
