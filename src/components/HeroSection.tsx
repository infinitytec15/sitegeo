import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useRef, Suspense, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Conditionally import Three.js components to prevent errors if libraries aren't loaded yet
let Canvas,
  useFrame,
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  useLoader,
  TextureLoader;
let AnimatedSphere = () => <div className="hidden"></div>;
let AnimatedGlobe = () => <div className="hidden"></div>;

// Try to import Three.js libraries
try {
  const ThreeImports = require("@react-three/fiber");
  const DreiImports = require("@react-three/drei");
  const ThreeCore = require("three");

  Canvas = ThreeImports.Canvas;
  useFrame = ThreeImports.useFrame;
  useLoader = ThreeImports.useLoader;
  OrbitControls = DreiImports.OrbitControls;
  Sphere = DreiImports.Sphere;
  MeshDistortMaterial = DreiImports.MeshDistortMaterial;
  TextureLoader = ThreeCore.TextureLoader;

  // Define AnimatedSphere only if imports succeeded
  AnimatedSphere = () => {
    const sphereRef = useRef(null);

    useFrame(({ clock }) => {
      if (sphereRef.current) {
        sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
        sphereRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      }
    });

    return (
      <Sphere args={[1, 64, 64]} ref={sphereRef}>
        <MeshDistortMaterial
          color="#004b6b"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    );
  };

  // Define AnimatedGlobe with Earth texture
  AnimatedGlobe = () => {
    const globeRef = useRef(null);
    const earthTexture = useLoader(
      TextureLoader,
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80&fm=jpg",
    );

    useFrame(({ clock }) => {
      if (globeRef.current) {
        globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      }
    });

    return (
      <Sphere args={[1, 64, 64]} ref={globeRef}>
        <meshStandardMaterial
          map={earthTexture}
          metalness={0.4}
          roughness={0.7}
        />
      </Sphere>
    );
  };
} catch (error) {
  console.warn("Three.js libraries not loaded yet:", error);
}

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactWhatsApp = () => {
    window.open("https://wa.me/5500000000000", "_blank");
  };

  const parallaxOffset = scrollY * 0.2;

  return (
    <section
      id="inicio"
      className="relative bg-[#004b6b] min-h-[85vh] flex items-center pt-16 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-[#004b6b]/95 to-[#1f2a38]/95 z-10"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px)`,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=1200&q=80)",
          opacity: 0.2,
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      {/* 3D Globe */}
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] z-50 opacity-80 hidden md:block"
        style={{
          transform: `translate3d(${scrollY * 0.1}px, -50%, 0) rotate(${scrollY * 0.02}deg)`,
        }}
      >
        {Canvas ? (
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
              castShadow
            />
            <directionalLight position={[-5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <AnimatedGlobe />
              {OrbitControls && (
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              )}
            </Suspense>
          </Canvas>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-white text-opacity-0 sr-only">
              Carregando elementos 3D...
            </p>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-30 flex flex-col lg:flex-row items-center justify-between pt-16 md:pt-20 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-2xl lg:pr-8 mb-10 lg:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-4 border border-white/20"
          >
            Tecnologia e precisão a serviço da engenharia
          </motion.div>

          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Soluções Avançadas em</span>
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Geotecnologia e Engenharia
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A ALFAGEO oferece serviços especializados em georreferenciamento,
            regularização fundiária, aerolevantamento com drone e projetos de
            engenharia civil, com excelência e tecnologia de ponta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={contactWhatsApp}
              className="bg-white text-[#004b6b] hover:bg-gray-100 font-medium text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-md w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
            >
              Solicite um Orçamento
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              onClick={() =>
                document
                  .getElementById("servicos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 font-medium text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-md w-full sm:w-auto transition-all duration-300"
            >
              Conheça Nossos Serviços
            </Button>
          </motion.div>
        </motion.div>

        {/* Team Image with floating animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full max-w-md lg:max-w-xl overflow-hidden hidden md:block"
          style={{
            transform: `translateY(${Math.sin(Date.now() / 1000) * 10}px)`,
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Equipe ALFAGEO"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/70 text-sm mb-2">Role para baixo</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
