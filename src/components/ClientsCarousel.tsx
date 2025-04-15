import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClientsCarousel = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const clients = [
    {
      name: "Construtora Alpha",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CA&backgroundColor=004b6b",
      testimonial:
        "A ALFAGEO nos proporcionou um serviço de georreferenciamento excepcional para nossos projetos.",
    },
    {
      name: "Prefeitura Municipal",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=PM&backgroundColor=1a5f7a",
      testimonial:
        "Contratamos a ALFAGEO para regularização fundiária e o resultado superou nossas expectativas.",
    },
    {
      name: "Agro Solutions",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=AS&backgroundColor=2a6f8a",
      testimonial:
        "O cadastro ambiental rural realizado pela equipe da ALFAGEO foi impecável e dentro do prazo.",
    },
    {
      name: "Incorporadora Beta",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=IB&backgroundColor=3a7f9a",
      testimonial:
        "Profissionalismo e precisão nos levantamentos topográficos para nossos empreendimentos.",
    },
    {
      name: "Fazenda São João",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=FSJ&backgroundColor=4a8faa",
      testimonial:
        "O aerolevantamento com drone nos ajudou a otimizar a gestão da propriedade rural.",
    },
    {
      name: "Construtora Omega",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CO&backgroundColor=5a9fba",
      testimonial:
        "Projetos de engenharia civil com excelência técnica e atendimento consultivo.",
    },
    {
      name: "Imobiliária Delta",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=ID&backgroundColor=004b6b",
      testimonial:
        "A regularização dos imóveis foi realizada com agilidade e segurança jurídica.",
    },
    {
      name: "Mineradora Gama",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=MG&backgroundColor=1a5f7a",
      testimonial:
        "Levantamentos topográficos precisos que nos ajudaram na tomada de decisões estratégicas.",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Start autoplay when component mounts
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Clear interval when component unmounts
    return () => {
      clearInterval(autoplayInterval);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section
      id="clientes"
      ref={sectionRef}
      className="py-16 sm:py-20 bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/80" />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-[#004b6b]/10 backdrop-blur-sm px-4 py-2 rounded-full text-[#004b6b] text-sm mb-4 border border-[#004b6b]/20 mx-auto"
          >
            Parcerias de Sucesso
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1f2a38] mb-4"
          >
            <span className="bg-gradient-to-r from-[#004b6b] to-[#5a9fba] bg-clip-text text-transparent">
              Nossos Clientes
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Empresas e instituições que confiam em nossos serviços e soluções
            para seus projetos.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Logos carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mb-12"
            onApiChange={setApi}
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4"
                >
                  <motion.div
                    className="p-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="rounded-xl bg-white border border-gray-200 shadow-sm p-4 h-24 sm:h-28 flex items-center justify-center hover:shadow-md transition-all duration-300"
                      animate={{
                        borderColor:
                          currentIndex === index ? "#004b6b" : "#e5e7eb",
                        boxShadow:
                          currentIndex === index
                            ? "0 4px 20px rgba(0, 75, 107, 0.15)"
                            : "0 1px 3px rgba(0,0,0,0.05)",
                      }}
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-12 sm:max-h-16 max-w-full"
                      />
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-white border border-[#004b6b]/20 hover:bg-[#004b6b]/5 text-[#004b6b]" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-white border border-[#004b6b]/20 hover:bg-[#004b6b]/5 text-[#004b6b]" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
