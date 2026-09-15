import {
  Factory,
  Handshake,
  Package,
  ShieldCheck,
  Users,
  Check,
} from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Direct\nFactory Demand",
    description: "Our family-owned wire drawing factories in India create ongoing demand.",
  },
  {
    icon: Handshake,
    title: "Long-Term\nPurchasing",
    description: "We focus on recurring supply relationships, not just one-time transactions.",
  },
  {
    icon: Package,
    title: "Commercial\nQuantities",
    description: "We are interested in truckload, container-load and recurring volume opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "International\nMarket Access",
    description: "Our global trade network allows us to evaluate supply opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Clear\nCommunication",
    description: "We provide straightforward discussions on specifications, pricing and logistics.",
  },
];

const buyers = [
  "Scrap yards and recycling companies",
  "Electrical contractors",
  "Manufacturers and industrial companies",
  "Demolition and construction companies",
  "Utility and HVAC contractors",
  "Surplus and liquidation companies",
  "Businesses with recurring copper scrap",
];

export default function WhySell() {
  return (
    <section className="why-sell">
      <div className="why-sell__inner">
        <div className="why-sell__heading">
          <p className="eyebrow eyebrow--light">REAL DEMAND. REAL OPPORTUNITY.</p>
          <h2>WHY SELL TO <span>BASCO METALS?</span></h2>
        </div>

        <div className="why-sell__layout">
          <div className="why-sell__grid">
            {reasons.map(({ icon: Icon, title, description }) => (
              <article key={title} className="why-sell__card">
                <div className="why-sell__icon"><Icon size={30} strokeWidth={1.7} /></div>
                <div className="why-sell__content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="why-sell__buyers">
            <h3><Users size={24} /> WHO WE BUY FROM</h3>
            <ul>
              {buyers.map((buyer) => <li key={buyer}><Check size={17} />{buyer}</li>)}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
