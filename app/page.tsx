import EventSection from "@/components/sections/EventSection";
import FindInHunt from "@/components/sections/FindInHunt";
import Footer from "@/components/sections/Footer";
import GetStarted from "@/components/sections/GetStarted";
import MainSection from "@/components/sections/MainSection";
import Navbar from "@/components/shared/Navbar";
import TabsComponents from "@/components/shared/TabsComponents";

export default function Home() {
  return (
    <>
      <Navbar />
      <TabsComponents />
      <MainSection />
      <EventSection />
      <FindInHunt />
      <GetStarted />
      <Footer />
    </>
  );
}
