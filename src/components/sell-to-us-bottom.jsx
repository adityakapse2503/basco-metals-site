import { ArrowRight } from "lucide-react";

export default function SellToUsBottom() {
  return (
    <section className="sell-to-us-bottom">
      <div className="sell-to-us-bottom__inner">
        <h2>LARGE OR RECURRING VOLUME?</h2>
        <p>We would like to discuss establishing a long-term supply relationship.</p>
        <a className="button button--orange" href="/contact">
          DISCUSS A SUPPLY PROGRAM <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}