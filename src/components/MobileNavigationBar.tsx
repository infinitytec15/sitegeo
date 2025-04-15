import { Home, Briefcase, MessageSquare } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}

const NavItem = ({ icon, label, onClick, active = false }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center px-1 sm:px-2 py-1 ${active ? "text-[#004b6b]" : "text-gray-500"}`}
    >
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white shadow-lg transform transition-all duration-300 ${active ? "shadow-[0_10px_25px_-5px_rgba(0,75,107,0.5)]" : "shadow-lg"} hover:shadow-[0_20px_25px_-5px_rgba(0,75,107,0.4)] hover:scale-110`}
        style={{
          transform: `perspective(800px) ${active ? "translateZ(10px) rotateX(10deg)" : "translateZ(0px)"}`,
        }}
      >
        {icon}
      </div>
      <span
        className={`text-xs mt-1 font-medium transition-all duration-300 ${active ? "scale-110" : ""}`}
      >
        {label}
      </span>
    </button>
  );
};

interface MobileNavigationBarProps {
  activeSection?: string;
}

const MobileNavigationBar = ({
  activeSection = "inicio",
}: MobileNavigationBarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white bg-opacity-95 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] rounded-t-xl z-50 py-1 sm:py-2 px-2 sm:px-4">
      <div className="flex justify-around items-center">
        <NavItem
          icon={<Home size={20} className="text-[#004b6b] sm:size-[24px]" />}
          label="Início"
          onClick={() => scrollToSection("inicio")}
          active={activeSection === "inicio"}
        />
        <NavItem
          icon={
            <Briefcase size={20} className="text-[#004b6b] sm:size-[24px]" />
          }
          label="Serviços"
          onClick={() => scrollToSection("servicos")}
          active={activeSection === "servicos"}
        />
        <NavItem
          icon={
            <MessageSquare
              size={20}
              className="text-[#004b6b] sm:size-[24px]"
            />
          }
          label="Contato"
          onClick={() => scrollToSection("contato")}
          active={activeSection === "contato"}
        />
      </div>
    </div>
  );
};

export default MobileNavigationBar;
