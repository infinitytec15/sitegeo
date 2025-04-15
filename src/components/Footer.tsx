import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#1f2a38] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>(00) 0000-0000</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>contato@alfageo.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>
                  Av. Principal, 1000, Centro
                  <br />
                  Cidade - Estado, CEP 00000-000
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="flex items-center hover:text-gray-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="flex items-center hover:text-gray-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#porque-escolher"
                  className="flex items-center hover:text-gray-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Por Que Nos Escolher
                </a>
              </li>
              <li>
                <a
                  href="#clientes"
                  className="flex items-center hover:text-gray-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Nossos Clientes
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="flex items-center hover:text-gray-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <Logo className="mt-4" />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} ALFAGEO - Geotecnologias e Engenharia.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
