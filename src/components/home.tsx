import { useState, useEffect } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import ClientsCarousel from "./ClientsCarousel";
import ContactCallToAction from "./ContactCallToAction";
import Footer from "./Footer";
import MobileNavigationBar from "./MobileNavigationBar";

function Home() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "inicio", element: document.getElementById("inicio") },
        { id: "servicos", element: document.getElementById("servicos") },
        {
          id: "porque-escolher",
          element: document.getElementById("porque-escolher"),
        },
        { id: "clientes", element: document.getElementById("clientes") },
        { id: "contato", element: document.getElementById("contato") },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          const offsetHeight = section.element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ClientsCarousel />
      <ContactCallToAction />
      <Footer />
      <MobileNavigationBar activeSection={activeSection} />
    </div>
  );
}

export default Home;
