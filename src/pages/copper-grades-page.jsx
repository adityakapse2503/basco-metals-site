import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CopperGradesHero from "../components/copper-grades-hero";
import CopperGradesCard, { copperGrades } from "../components/copper-grades-card";

export default function CopperGradesPage() {
  return (
    <div className="font-sans copper-grades-page">
      <Navbar />
      <main>
        <CopperGradesHero />
        <section className="copper-grades-list" aria-labelledby="copper-grades-list-title">
          <h2 id="copper-grades-list-title" className="sr-only">Copper scrap grades</h2>
          <div className="copper-grades-list__grid">
            {copperGrades.map((grade) => (
              <CopperGradesCard key={grade.code} {...grade} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
