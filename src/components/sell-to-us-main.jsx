import { Check } from "lucide-react";

const requirements = [
  "Copper grade and material type",
  "Available quantity and recurring volume",
  "Material location",
  "Photos or videos",
  "Asking price",
  "Packaging or loading details",
  "Contact information",
];

export default function SellToUsMain() {
  return (
    <section className="sell-to-us-main" id="sell-to-us-form">
      <div className="sell-to-us-main__image">
        <img
          src="/images/Banners/sell-to-us-img.png"
          alt="Copper scrap prepared for sale"
        />
      </div>
      <div className="sell-to-us-main__card">
        <h2>WHAT WE ARE LOOKING FOR</h2>
        <ul>
          {requirements.map((requirement) => (
            <li key={requirement}><Check size={18} />{requirement}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}