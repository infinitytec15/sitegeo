import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useRef, Suspense } from "react";

// Conditionally import Three.js components to prevent errors if libraries aren't loaded yet
let Canvas, useFrame, OrbitControls, Sphere, MeshDistortMaterial;
let AnimatedSphere = () => <div className="hidden"></div>;

// Try to import Three.js libraries
try {
  const ThreeImports = require("@react-three/fiber");
  const DreiImports = require("@react-three/drei");

  Canvas = ThreeImports.Canvas;
  useFrame = ThreeImports.useFrame;
  OrbitControls = DreiImports.OrbitControls;
  Sphere = DreiImports.Sphere;
  MeshDistortMaterial = DreiImports.MeshDistortMaterial;

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
} catch (error) {
  console.warn("Three.js libraries not loaded yet:", error);
}

const HeroSection = () => {
  const contactWhatsApp = () => {
    window.open("https://wa.me/5500000000000", "_blank");
  };

  return (
    <section
      id="inicio"
      className="relative bg-[#004b6b] min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#004b6b]/90 to-[#1f2a38]/90 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=1200&q=80)",
          opacity: 0.2,
        }}
      />

      {/* 3D Globe */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] z-5 opacity-70 hidden md:block">
        {Canvas ? (
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              <AnimatedSphere />
              {OrbitControls && (
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={false}
                />
              )}
            </Suspense>
          </Canvas>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#004b6b]/30 rounded-full">
            <p className="text-white text-opacity-70">Loading 3D elements...</p>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-20 flex flex-col lg:flex-row items-center justify-between pt-16 md:pt-20 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-2xl lg:pr-8 mb-10 lg:mb-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Soluções em Geotecnologia e Engenharia
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8">
            A ALFAGEO oferece serviços especializados em georreferenciamento,
            regularização fundiária, aerolevantamento com drone e projetos de
            engenharia civil, com excelência e tecnologia de ponta.
          </p>
          <Button
            onClick={contactWhatsApp}
            className="bg-white text-[#004b6b] hover:bg-gray-100 font-medium text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-md w-full sm:w-auto"
          >
            Solicite um Orçamento
          </Button>
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full max-w-md lg:max-w-xl rounded-lg overflow-hidden shadow-2xl hidden md:block"
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
            alt="Equipe ALFAGEO"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
