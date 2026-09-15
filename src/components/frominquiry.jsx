import {
  ArrowRight,
  FileText,
  Search,
  Scale,
  Truck,
  Layers3,
} from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Submit Your Material",
    description:
      "Tell us about your copper scrap, quantity, location and expected shipment timeline.",
  },
  {
    number: "2",
    icon: Search,
    title: "Material Review",
    description:
      "Our team reviews your material details, specifications, photos and other relevant information.",
  },
  {
    number: "3",
    icon: Scale,
    title: "Commercial Terms",
    description:
      "Once the material is approved, we discuss pricing, specifications, quantity and commercial terms.",
  },
  {
    number: "4",
    icon: Truck,
    title: "Verification & Logistics",
    description:
      "We coordinate the next steps for loading, logistics and delivery according to the agreed terms.",
  },
  {
    number: "5",
    icon: Layers3,
    title: "Purchase & Long-Term Supply",
    description:
      "We complete the purchase and look for ongoing opportunities.",
  },
];

export default function FromInquiry() {
  return (
    <section className="from-inquiry" id="process">
      <div className="from-inquiry__inner">
        <div className="from-inquiry__heading">
          <p className="eyebrow eyebrow--dark"><span /> A SIMPLE AND TRANSPARENT PROCESS</p>
          <h2>FROM INQUIRY TO <span>PURCHASE</span></h2>
        </div>

        <div className="from-inquiry__steps">
          {steps.map(
            ({ number, icon: Icon, title, description }, index) => (
              <div
                className="from-inquiry__step"
                key={number}
              >
                <div className="from-inquiry__top">
                  <span className="from-inquiry__number">{number}</span>

                  <span className="from-inquiry__icon">
                    <Icon
                      size={22}
                      strokeWidth={1.6}
                    />
                  </span>
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="from-inquiry__arrow"
                    size={20}
                    strokeWidth={1.5}
                  />
                )}
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
