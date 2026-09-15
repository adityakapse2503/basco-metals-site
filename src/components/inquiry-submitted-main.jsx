import { ArrowRight, Check } from "lucide-react";

export default function InquirySubmittedMain() {
  return (
    <main className="inquiry-submitted-main">
      <Check className="inquiry-submitted-main__icon" size={48} strokeWidth={2.5} />
      <h2>Thank You!</h2>
      <p className="inquiry-submitted-main__lead">
        Your inquiry has been successfully submitted.
      </p>
      <p className="inquiry-submitted-main__copy">
        We appreciate your interest in BASCO METALS. Our team will review your
        information and get back to you as soon as possible.
      </p>
      <div className="inquiry-submitted-main__actions">
        <a className="button button--orange" href="/">
          RETURN TO HOME <ArrowRight size={16} />
        </a>
        <a className="button button--dark-outline" href="/contact">
          SUBMIT ANOTHER INQUIRY
        </a>
      </div>
    </main>
  );
}