import { Factory, Handshake, Globe, ShieldCheck, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/* 1. HERO SECTION                                                     */
/* ------------------------------------------------------------------ */

const features = [
  { icon: Factory, label: "Direct\nFactory Demand" },
  { icon: Handshake, label: "Long-Term\nSupply Relationships" },
  { icon: Globe, label: "International\nMarket Access" },
  { icon: ShieldCheck, label: "Professional\n& Transparent" },
];

export function CopperHero() {
  return (
    <section className="copper-hero">
      <div className="copper-hero__image" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=2000&auto=format&fit=crop"
          alt=""
        />
      </div>

      <div className="copper-hero__inner">
        <div className="copper-hero__copy">
          <p className="eyebrow eyebrow--light">
            A SERIOUS BUYER FOR YOUR COPPER SCRAP
          </p>

          <h1>
            WE BUY
            <br />
            <span>COPPER SCRAP</span>
          </h1>

          <p className="hero-tagline">
            Direct Factory Demand. Long-Term Supply Relationships.
          </p>

          <p className="hero-description">
            Basco Metals purchases copper scrap from recyclers, scrap yards,
            contractors, manufacturers and other qualified suppliers. Our
            family owns wire drawing factories in India, and we source copper
            scrap to support our manufacturing requirements.
          </p>

          <div className="hero-actions">
            <button className="button button--orange">
              SELL COPPER SCRAP TO US
              <ArrowRight size={16} />
            </button>
            <button className="button button--outline">
              VIEW COPPER GRADES
            </button>
          </div>
        </div>

        <div className="hero-features">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="hero-feature">
              <span className="hero-feature__icon">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <span>
                {label}
              </span>
            </div>
          ))}

          <p className="hero-signoff">
            Turning Scrap
            <br />
            into a Brighter Tomorrow.
            <span />
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. GRADES SECTION                                                   */
/* ------------------------------------------------------------------ */

const grades = [
  {
    code: "BARLEY",
    grade: "No. 1 Copper Wire",
    desc: "Bare, uncoated and unalloyed copper wire (Bare Bright).",
    cta: "SELL BARLEY",
    img: "/images/Copper Grades/Barley",
  },
  {
    code: "BERRY",
    grade: "No. 1 Copper Wire",
    desc: "Clean, untinned, uncoated copper wire and cable.",
    cta: "SELL BERRY",
    img: "/images/Copper Grades/BERRY",
  },
  {
    code: "BIRCH",
    grade: "No. 2 Copper Wire",
    desc: "Unalloyed copper wire meeting grade specifications.",
    cta: "SELL BIRCH",
    img: "/images/Copper Grades/BIRCH2",
  },
  {
    code: "CLIFF",
    grade: "No. 2 Copper Solids & Tubing",
    desc: "Copper solids, tubing and other qualifying copper scrap.",
    cta: "SELL CLIFF",
    img: "/images/Copper Grades/CLIFF",
  },
  {
    code: "DRUID",
    grade: "Insulated Copper Wire",
    desc: "Insulated copper wire and cable meeting agreed specifications.",
    cta: "SELL INSULATED WIRE",
    img: "/images/Copper Grades/DRUID",
  },
  {
    code: "CLOVE",
    grade: "No. 1 Copper Wire Nodules",
    desc: "Clean chopped or shredded copper wire nodules.",
    cta: "SELL NODULES",
    img: "/images/Copper Grades/CLOVE",
  },
];

export function CopperGrades() {
  return (
    <section className="grades-section">
      <div className="grades-inner">
        <div className="grades-heading">
          <div>
            <div className="eyebrow eyebrow--dark">
              <span />
                COPPER SCRAP WE BUY
            </div>
            <h2>
              KEY GRADES WE ARE{" "}
              <span>PURCHASING</span>
            </h2>
          </div>
          <a
            href="#"
            className="all-grades"
          >
            VIEW ALL GRADES
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grades-grid">
          {grades.map((g) => (
            <article
              key={g.code}
              className="grade-card"
            >
              <div className="grade-card__image">
                <img
                  src={g.img}
                  alt={g.code}
                />
              </div>
              <div className="grade-card__body">
                <h3>
                  {g.code}
                </h3>
                <p className="grade-card__grade">{g.grade}</p>
                <p className="grade-card__description">
                  {g.desc}
                </p>
                <button className="grade-card__button" href="/contact">
                  {g.cta}
                  <ArrowRight size={12} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Demo wrapper (default export)                                       */
/* ------------------------------------------------------------------ */

export default function CopperScrapPage() {
  return (
    <div className="font-sans">
      <CopperHero />
      <CopperGrades />
    </div>
  );
}