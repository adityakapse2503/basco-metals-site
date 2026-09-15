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
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop"
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