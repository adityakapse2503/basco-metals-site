import HomeHero from "../components/homehero";
import KeyGrades from "../components/keygrades";
import WhySell from "../components/whysell";
import FromInquiry from "../components/frominquiry";
import HaveCopper from "../components/havecopper";

export default function CopperScrapPage() {
  return (
    <div className="font-sans">
      <HomeHero />
      <KeyGrades />
      <WhySell />
      <FromInquiry />
      <HaveCopper />
    </div>
  );
}
