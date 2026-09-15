import { ArrowRight } from "lucide-react";

export default function ProcessBottom() {
  return (
    <section className="process-bottom" id="sell">
      <div className="process-bottom__inner">
        <h2>READY TO GET STARTED?</h2>
        <p>Submit your inquiry today and let&apos;s discuss your material.</p>
        <a className="button button--orange" href="/contact">
          SUBMIT AN INQUIRY <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
