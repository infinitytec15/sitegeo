import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "./ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClientsCarousel = () => {
  const clients = [
    {
      name: "Cliente 1",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C1&backgroundColor=004b6b",
    },
    {
      name: "Cliente 2",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C2&backgroundColor=004b6b",
    },
    {
      name: "Cliente 3",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C3&backgroundColor=004b6b",
    },
    {
      name: "Cliente 4",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C4&backgroundColor=004b6b",
    },
    {
      name: "Cliente 5",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C5&backgroundColor=004b6b",
    },
    {
      name: "Cliente 6",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C6&backgroundColor=004b6b",
    },
    {
      name: "Cliente 7",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C7&backgroundColor=004b6b",
    },
    {
      name: "Cliente 8",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C8&backgroundColor=004b6b",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Start autoplay when component mounts
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds

    // Clear interval when component unmounts
    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <section id="clientes" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2a38] mb-4"
          >
            Nossos Clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Empresas e instituições que confiam em nossos serviços e soluções.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onApiChange={setApi}
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-2 sm:p-4">
                    <div className="rounded-lg bg-white border border-gray-200 shadow-sm p-3 sm:p-6 h-24 sm:h-32 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-12 sm:max-h-16 max-w-full"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
