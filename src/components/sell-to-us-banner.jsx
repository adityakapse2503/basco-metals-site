import { ArrowRight } from "lucide-react";

export default function SellToUsBanner() {
  return (
    <section className="sell-to-us-banner">
      <div className="sell-to-us-banner__inner">
        <p className="sell-to-us-banner__eyebrow"><span /> SELL COPPER SCRAP</p>
        <h1>SELL COPPER SCRAP<br /><span>TO A SERIOUS BUYER</span></h1>
        <p className="sell-to-us-banner__tagline">Direct Factory Demand. Long-Term Supply Relationships.</p>
        <p className="sell-to-us-banner__description">
          BASCO METALS actively purchases copper scrap from recyclers, scrap yards,
          contractors, manufacturers and other qualified suppliers. Our family-owned
          wire drawing factories in India create ongoing demand, and we build long-term
          relationships with reliable suppliers.
        </p>
        <a className="button button--orange" href="/contact">
          SUBMIT AN INQUIRY <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}