import {
  Factory,
  Handshake,
  Globe,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  { icon: Factory, label: "Direct\nFactory Demand" },
  { icon: Handshake, label: "Long-Term\nSupply Relationships" },
  { icon: Globe, label: "International\nMarket Access" },
  { icon: ShieldCheck, label: "Professional\n& Transparent" },
];

export default function HomeHero() {
  return (
    <section className="copper-hero" id="home">
      <div className="copper-hero__image" aria-hidden="true">
        <img
          src="/images/Banners/process-bottom.png"
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
            contractors, manufacturers and other qualified suppliers. Our family
            owns wire drawing factories in India, and we source copper scrap to
            support our manufacturing requirements.
          </p>

          <div className="hero-actions">
            <button
              className="button button--orange"
              onClick={() => {
                window.location.href = "/suppliers";
              }}
            >
              SELL COPPER SCRAP TO US
              <ArrowRight size={16} />
            </button>

            <button
              className="button button--outline"
              onClick={() => {
                window.location.href = "/grades";
              }}
            >
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
                {label.split("\n").map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < label.split("\n").length - 1 && <br />}
                  </span>
                ))}
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
