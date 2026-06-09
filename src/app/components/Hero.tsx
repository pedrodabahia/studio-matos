import { motion, useScroll, useTransform } from "motion/react";
import '@splinetool/viewer';
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0],
  );
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      <motion.div
        className="mx-auto flex flex-wrap justify-center max-w-6xl text-center"
        style={{ opacity, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mt-15 mb-5 inline-flex items-center gap-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#00ff88]" />
            <span className="text-sm text-[#00ff88]">
              Transformação Digital Premium
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="mb-6 bg-gradient-to-r from-white via-white to-[#00ff88] bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:text-8xl lg:text-8xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transformamos negócios comuns em{" "}
          <span className="text-[#00ff88]">
            presença digital forte
          </span>
        </motion.h1>

        <motion.p
          className=" mb-30 max-w-2xl text-xltext-white/70 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Sites, sistemas e soluções modernas para empresas que
          querem crescer.
        </motion.p>

        <motion.div
          className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#contato"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#00ff88] px-8 py-4 font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.a>

          <motion.a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-lg border border-[#00ff88]/30 bg-[#00ff88]/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-[#00ff88] hover:bg-[#00ff88]/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Projetos
          </motion.a>
        </motion.div>
      </motion.div>
          {/*<div className="absolute top-60 inset-0">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={4} />
              <pointLight position={[0,0,-2]} intensity={40} color="#00ff88"/>
              <Model />
            </Canvas>
          </div>*/}
        </section>
  );
}