import { ArrowRight } from "lucide-react";

export const copperGrades = [
  {
    code: "BARLEY",
    grade: "No. 1 Copper Wire",
    description: "Bare, uncoated and unalloyed copper wire grade.",
    image: "/images/Copper Grades/BARLEY.png",
  },
  {
    code: "BERRY",
    grade: "No. 1 Copper Wire",
    description: "Clean wire, uninsulated and uncoated copper wire or cable.",
    image: "/images/Copper Grades/BERRY.png",
  },
  {
    code: "BIRCH",
    grade: "No. 2 Copper Wire",
    description: "Unalloyed copper wire meeting grade specifications.",
    image: "/images/Copper Grades/BIRCH.png",
  },
  {
    code: "CLIFF",
    grade: "No. 2 Copper Solids & Tubing",
    description: "Copper solids, tubing and other qualifying copper scrap.",
    image: "/images/Copper Grades/CLIFF.png",
  },
  {
    code: "DRUID",
    grade: "Insulated Copper Wire",
    description: "Insulated copper wire and cable meeting specifications.",
    image: "/images/Copper Grades/DRUID.png",
  },
  {
    code: "CLOVE",
    grade: "No. 1 Copper Wire Nodules",
    description: "Clean chopped or shredded copper wire nodules.",
    image: "/images/Copper Grades/CLOVE.png",
  },
];

export default function CopperGradesCard({ code, grade, description, image }) {
  return (
    <article className="copper-grades-card">
      <div className="copper-grades-card__image">
        <img src={image} alt={`${code} copper scrap`} />
      </div>
      <div className="copper-grades-card__body">
        <h2>{code}</h2>
        <p className="copper-grades-card__grade">{grade}</p>
        <p className="copper-grades-card__description">{description}</p>
        <a className="copper-grades-card__button" href="/contact">
          SELL {code}
          <ArrowRight size={15} />
        </a>
      </div>
    </article>
  );
}
