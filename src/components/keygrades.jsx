import { ArrowRight } from "lucide-react";

const grades = [
  {
    code: "BARLEY",
    grade: "No. 1 Copper Wire",
    desc: "Bare, uncoated and unalloyed copper wire (Bare Bright).",
    cta: "SELL BARLEY",
    img: "/images/Copper Grades/BARLEY.png",
  },
  {
    code: "BERRY",
    grade: "No. 1 Copper Wire",
    desc: "Clean, untinned, uncoated copper wire and cable.",
    cta: "SELL BERRY",
    img: "/images/Copper Grades/BERRY.png",
  },
  {
    code: "BIRCH",
    grade: "No. 2 Copper Wire",
    desc: "Unalloyed copper wire meeting grade specifications.",
    cta: "SELL BIRCH",
    img: "/images/Copper Grades/BIRCH.png",
  },
  {
    code: "CLIFF",
    grade: "No. 2 Copper Solids & Tubing",
    desc: "Copper solids, tubing and other qualifying copper scrap.",
    cta: "SELL CLIFF",
    img: "/images/Copper Grades/CLIFF.png",
  },
  {
    code: "DRUID",
    grade: "Insulated Copper Wire",
    desc: "Insulated copper wire and cable meeting agreed specifications.",
    cta: "SELL INSULATED WIRE",
    img: "/images/Copper Grades/DRUID.png",
  },
  {
    code: "CLOVE",
    grade: "No. 1 Copper Wire Nodules",
    desc: "Clean chopped or shredded copper wire nodules.",
    cta: "SELL NODULES",
    img: "/images/Copper Grades/CLOVE.png",
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