import NavBar from "./_component/landingPage/nav";
import InfoSection, { Work } from "./_component/landingPage/infoSection";
import { Testimonials } from "./_component/landingPage/infoSection";
import Stats from "./_component/landingPage/stats";
import Footer from "./_component/landingPage/footer";
import { Promises } from "./_component/landingPage/infoSection";

export default function Home() {

  return (
    <div className="z-30 text-[#383b51] bg-[#ffffff]">
      <div className="bg-[#f9f5f3] rounded-b-[100px]">
        <NavBar />
        <InfoSection />
        <Stats />
      </div>
      <Promises />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
}
