import { FileText, Search, Handshake, Truck, Layers3 } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Submit Your Material",
    description:
      "Share details about your copper scrap, including grade, quantity, location, photos and asking price.",
  },
  {
    number: "2",
    icon: Search,
    title: "Material Review",
    description:
      "We review your material and determine suitability based on our current purchasing requirements.",
  },
  {
    number: "3",
    icon: Handshake,
    title: "Commercial Terms",
    description:
      "We discuss pricing, inspection, payment terms and logistics.",
  },
  {
    number: "4",
    icon: Truck,
    title: "Verification & Logistics",
    description:
      "Material is verified as required and shipment is arranged.",
  },
  {
    number: "5",
    icon: Layers3,
    title: "Purchase & Long-Term Supply",
    description:
      "We complete the purchase and, for suitable suppliers, look to establish an ongoing supply relationship.",
  },
];

export default function ProcessMain() {
  return (
    <section className="process-main">
      <div className="process-main__inner">
        {steps.map(({ number, icon: Icon, title, description }) => (
          <article className="process-main__step" key={number}>
            <span className="process-main__number">{number}</span>
            <span className="process-main__icon">
              <Icon size={42} strokeWidth={1.6} />
            </span>
            <div className="process-main__copy">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
