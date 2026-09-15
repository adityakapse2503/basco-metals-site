import { ArrowRight } from "lucide-react";

const grades = [
  {
    code: "BARLEY",
    grade: "No. 1 Copper Wire",
    desc: "Bare, uncoated and unalloyed copper wire (Bare Bright).",
    cta: "SELL BARLEY",
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "BERRY",
    grade: "No. 1 Copper Wire",
    desc: "Clean, untinned, uncoated copper wire and cable.",
    cta: "SELL BERRY",
    img: "https://images.unsplash.com/photo-1610878180933-123728745d22?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "BIRCH",
    grade: "No. 2 Copper Wire",
    desc: "Unalloyed copper wire meeting grade specifications.",
    cta: "SELL BIRCH",
    img: "https://images.unsplash.com/photo-1620201286349-d9ba95a3ea01?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "CLIFF",
    grade: "No. 2 Copper Solids & Tubing",
    desc: "Copper solids, tubing and other qualifying copper scrap.",
    cta: "SELL CLIFF",
    img: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "DRUID",
    grade: "Insulated Copper Wire",
    desc: "Insulated copper wire and cable meeting agreed specifications.",
    cta: "SELL INSULATED WIRE",
    img: "https://images.unsplash.com/photo-1601058268499-e52e2c531e2c?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "CLOVE",
    grade: "No. 1 Copper Wire Nodules",
    desc: "Clean chopped or shredded copper wire nodules.",
    cta: "SELL NODULES",
    img: "https://images.unsplash.com/photo-1610878180933-123728745d22?q=80&w=800&auto=format&fit=crop",
  },
];

export default function KeyGrades() {
  const goToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="grades-section" id="grades">
      <div className="grades-inner">
        <div className="grades-heading">
          <div>
            <div className="eyebrow eyebrow--dark">
              <span />
              COPPER SCRAP WE BUY
            </div>

            <h2>
              KEY GRADES WE ARE <span>PURCHASING</span>
            </h2>
          </div>

          <a href="/grades" className="all-grades">
            VIEW ALL GRADES
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grades-grid">
          {grades.map((g) => (
            <article key={g.code} className="grade-card">
              <div className="grade-card__image">
                <img src={g.img} alt={g.code} />
              </div>

              <div className="grade-card__body">
                <h3>{g.code}</h3>

                <p className="grade-card__grade">
                  {g.grade}
                </p>

                <p className="grade-card__description">
                  {g.desc}
                </p>

                <button className="grade-card__button" onClick={goToContact}>
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