import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactWhatsApp = () => {
    window.open("https://wa.me/5500000000000", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Logo className="z-50 h-10 w-auto" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-3 lg:space-x-6">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-800 hover:text-[#004b6b] font-medium"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-gray-800 hover:text-[#004b6b] font-medium"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("porque-escolher")}
                className="text-gray-800 hover:text-[#004b6b] font-medium"
              >
                Por que nos escolher
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("clientes")}
                className="text-gray-800 hover:text-[#004b6b] font-medium"
              >
                Nossos Clientes
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-gray-800 hover:text-[#004b6b] font-medium"
              >
                Contato
              </button>
            </li>
          </ul>
          <Button
            onClick={contactWhatsApp}
            className="bg-[#004b6b] hover:bg-[#003a54] text-white rounded-md text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-2"
          >
            Entre em Contato
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
            <ul className="flex flex-col space-y-6 text-center">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-800 hover:text-[#004b6b] text-xl font-medium"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-gray-800 hover:text-[#004b6b] text-xl font-medium"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("porque-escolher")}
                  className="text-gray-800 hover:text-[#004b6b] text-xl font-medium"
                >
                  Por que nos escolher
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("clientes")}
                  className="text-gray-800 hover:text-[#004b6b] text-xl font-medium"
                >
                  Nossos Clientes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-gray-800 hover:text-[#004b6b] text-xl font-medium"
                >
                  Contato
                </button>
              </li>
              <li className="pt-4">
                <Button
                  onClick={contactWhatsApp}
                  className="bg-[#004b6b] hover:bg-[#003a54] text-white rounded-md w-full"
                >
                  Entre em Contato
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
