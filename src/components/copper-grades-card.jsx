import { ArrowRight } from "lucide-react";

export const copperGrades = [
  {
    code: "BARLEY",
    grade: "No. 1 Copper Wire",
    description: "Bare, uncoated and unalloyed copper wire grade.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "BERRY",
    grade: "No. 1 Copper Wire",
    description: "Clean wire, uninsulated and uncoated copper wire or cable.",
    image: "https://images.unsplash.com/photo-1610878180933-123728745d22?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "BIRCH",
    grade: "No. 2 Copper Wire",
    description: "Unalloyed copper wire meeting grade specifications.",
    image: "https://images.unsplash.com/photo-1620201286349-d9ba95a3ea01?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "CLIFF",
    grade: "No. 2 Copper Solids & Tubing",
    description: "Copper solids, tubing and other qualifying copper scrap.",
    image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "DRUID",
    grade: "Insulated Copper Wire",
    description: "Insulated copper wire and cable meeting specifications.",
    image: "https://images.unsplash.com/photo-1601058268499-e52e2c531e2c?q=80&w=900&auto=format&fit=crop",
  },
  {
    code: "CLOVE",
    grade: "No. 1 Copper Wire Nodules",
    description: "Clean chopped or shredded copper wire nodules.",
    image: "https://images.unsplash.com/photo-1610878180933-123728745d22?q=80&w=900&auto=format&fit=crop",
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
