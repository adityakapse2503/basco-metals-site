import { ArrowRight } from "lucide-react";

export default function HaveCopper() {
  return (
    <section className="have-copper" id="sell">
      <div className="have-copper__image" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1800&auto=format&fit=crop"
          alt=""
        />
      </div>

      <div className="have-copper__overlay" />
      <div className="have-copper__inner">
        <div className="have-copper__content">
          <h2>HAVE COPPER SCRAP TO SELL?</h2>
          <p>Get in touch with us today. The more information you provide, the faster we can evaluate your material.</p>
          <button className="button button--orange" onClick={() => (window.location.href = "/contact")}>
            SUBMIT AN INQUIRY <ArrowRight size={16} />
          </button>
        </div>
        <div className="have-copper__partner">
          <h2>LOOKING FOR A LONG-TERM<br />SUPPLY PARTNER?</h2>
          <p>We are actively seeking reliable suppliers for ongoing purchasing opportunities.</p>
          <button className="button button--outline" onClick={() => (window.location.href = "/contact")}>
            DISCUSS A SUPPLY PROGRAM <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
