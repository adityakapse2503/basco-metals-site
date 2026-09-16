import { useEffect, useState } from "react";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

const GRADE_OPTIONS = [
  "BARLEY",
  "BERRY",
  "BIRCH",
  "CLIFF",
  "DRUID",
  "CLOVE",
  "Other",
];

const initialForm = {
  company: "",
  name: "",
  email: "",
  phone: "",
  grade: "",
  quantity: "",
  monthly_quantity: "",
  location: "",
  price: "",
  message: "",
};

function validateEmail(value) {
  if (!value) return "";
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? ""
    : "Please enter a valid email address.";
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [emailError, setEmailError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const grade = new URLSearchParams(window.location.search).get("grade");
    const selectedGrade = GRADE_OPTIONS.find(
      (option) => option.toLowerCase() === grade?.toLowerCase(),
    );

    if (selectedGrade) {
      setFormData((current) => ({ ...current, grade: selectedGrade }));
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValue = name === "email" ? value.toLowerCase() : value;

    setFormData((current) => ({ ...current, [name]: nextValue }));
    setSubmitError("");

    if (name === "email") {
      setEmailError(validateEmail(nextValue));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextEmailError = validateEmail(formData.email);

    if (nextEmailError) {
      setEmailError(nextEmailError);
      return;
    }

    const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
    const formId = import.meta.env.VITE_HUBSPOT_FORM_ID;

    if (!portalId || !formId) {
      // console.log("portalId:", portalId, "formId:", formId);
      setSubmitError(
        "The inquiry form is not configured yet. Please contact us directly.",
      );
      return;
    }
    setIsSubmitting(true);
    setSubmitError("");

    const fields = [
      ["firstname", formData.name],
      ["company", formData.company],
      ["email", formData.email],
      ["phone", formData.phone],
      ["material_grade", formData.grade],
      ["available_quantity", formData.quantity],
      ["monthly_quantity", formData.monthly_quantity],
      ["material_location", formData.location],
      ["asking_price", formData.price],
      ["additional_information", formData.message],
    ].map(([name, value]) => ({ objectTypeId: "0-1", name, value }));

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fields }),
        },
      );

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.message || "Unable to submit your inquiry.");
      }

      window.location.assign("/inquiry-submitted");
    } catch (error) {
      setSubmitError(
        error.message ||
          "There was an error submitting your inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-main">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>SUPPLIER INQUIRY FORM</h2>
        <div className="contact-form__grid">
          <Field
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Enter company name"
          />
          <Field
            label="Contact Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter contact name"
          />
          <Field
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            error={emailError}
            placeholder="you@company.com"
          />
          <Field
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(123) 456-7890"
          />
          <label>
            Material Type / Grade *
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            >
              <option value="">Select a grade</option>
              {GRADE_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <Field
            label="Available Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            placeholder="e.g. 10 MT"
          />
          <Field
            label="Recurring Monthly Quantity"
            name="monthly_quantity"
            value={formData.monthly_quantity}
            onChange={handleChange}
            placeholder="e.g. 100 MT per month"
          />
          <Field
            label="Material Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="City, State / Port, Country"
          />
          <Field
            label="Asking Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g. $/lb, $/MT (optional)"
          />
          <label className="contact-form__wide">
            Additional Information
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your material, condition, photos, or any other details..."
            />
          </label>
        </div>
        {submitError && (
          <p className="contact-form__error" role="alert">
            {submitError}
          </p>
        )}
        <button
          className="button button--orange contact-form__submit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "SUBMITTING..." : "SUBMIT INQUIRY"}{" "}
          <ArrowRight size={16} />
        </button>
      </form>

      <aside className="contact-info">
        <h2>CONTACT INFORMATION</h2>
        <p>
          <MapPin /> 118-21 Queens Boulevard, Suite 413
          <br />
          Forest Hills, NY 11375
        </p>
        <a href="tel:+19176273000">
          <Phone /> 917-627-3000
        </a>
        <a href="mailto:jb@bascometals.com">
          <Mail /> jb@bascometals.com
        </a>
        <hr />
        <h2>BUSINESS HOURS</h2>
        <p>
          <Clock3 /> Monday - Friday
          <br />
          <span>9:00 AM - 6:00 PM (EST)</span>
        </p>
        <div className="contact-info__image">
          <img
            src="/images/Banners/contact-form.png"
            alt="Cargo ship at sunset"
          />
          <strong>
            GLOBAL MARKETS.
            <br />
            STRONGER TOMORROW.
          </strong>
        </div>
      </aside>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  error = "",
  placeholder,
}) {
  return (
    <label>
      {label}
      {required ? " *" : ""}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
      />
      {error && <small className="contact-form__field-error">{error}</small>}
    </label>
  );
}