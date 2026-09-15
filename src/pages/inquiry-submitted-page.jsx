import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquirySubmittedBanner from "../components/inquiry-submitted-banner";
import InquirySubmittedMain from "../components/inquiry-submitted-main";

export default function InquirySubmittedPage() {
  return (
    <div className="font-sans inquiry-submitted-page">
      <Navbar />
      <InquirySubmittedBanner />
      <InquirySubmittedMain />
      <Footer />
    </div>
  );
}