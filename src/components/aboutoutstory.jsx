import { ArrowRight, Globe, HeartHandshake, ShieldCheck, Users } from "lucide-react";

const values = [
  { icon: Users, title: "Integrity", text: "We believe in honest and transparent relationships." },
  { icon: Globe, title: "Long-Term Focus", text: "We value reliable, long-term supply partners." },
  { icon: ShieldCheck, title: "Quality", text: "We source material that meets our specifications." },
  { icon: HeartHandshake, title: "Global Perspective", text: "We connect suppliers with real manufacturing demand." },
];

export default function AboutOurStory() {
  return (
    <section className="about-story" id="about-story">
      <div className="about-story__story">
        <h2>OUR STORY</h2>
        <p>
          BASCO METALS was established to support the raw material requirements
          of our family&apos;s wire drawing factories in India. We actively source
          copper scrap from reliable suppliers worldwide and aim to build
          long-term, mutually beneficial relationships.
        </p>
        <p>
          Our focus is on quality material, clear communication and professional
          trade execution. We believe in doing business the right way, with
          integrity, transparency and a long-term commitment to our partners.
        </p>
        <a className="button button--orange" href="/process">
          OUR PROCESS <ArrowRight size={16} />
        </a>
      </div>
      <div className="about-story__values">
        <h2>OUR VALUES</h2>
        <div className="about-values">
          {values.map(({ icon: Icon, title, text }) => (
            <article className="about-value" key={title}>
              <Icon size={34} strokeWidth={1.8} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}