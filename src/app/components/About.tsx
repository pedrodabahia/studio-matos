import { motion } from "motion/react";
import { Code2, Award, Rocket } from "lucide-react";
import imagePessoal from '../../image/fotoPessoal.webp';

export function About() {
  return (
    <section id="sobre" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="mb-6 bg-gradient-to-r from-white to-[#00ff88] bg-clip-text text-5xl font-bold text-transparent md:text-6xl"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Sobre o Studio
            </h2>
            <div className="space-y-4 text-lg text-white/80">
              <p>
                <span className="font-bold text-[#00ff88]">
                  Pedro Matos
                </span>{" "}
                é desenvolvedor web focado em criar sites modernos, 
                sistemas sob medida e soluções digitais que ajudam 
                negócios em Posto da Mata e todo o Brasil a evoluírem.
              </p>
              <p>
                Unindo estudo constante, criatividade e execução prática, 
                o <span className="font-bold text-[#00ff88]">Studio Matos</span>{" "}
                nasce com a proposta de entregar tecnologia moderna, acessível e sem enrolação.
              </p>
              <p>
                Nossa missão é entregar não apenas código, mas uma presença 
                digital estratégica que gera resultados reais e mensuráveis 
                para a sua empresa.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Code2, label: "Tecnologia de Ponta" },
                { icon: Award, label: "Excelência" },
                { icon: Rocket, label: "Resultados" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.1,
                    }}
                  >
                    <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-[#00ff88]/30 bg-[#00ff88]/10">
                      <Icon className="h-7 w-7 text-[#00ff88]" />
                    </div>
                    <p className="text-sm text-white/70">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#00ff88]/30 bg-gradient-to-br from-[#00ff88]/10 to-transparent p-1">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-black/50">
                <div className="text-center">
                    <img className="h-100 sm:h-140 mt-12" alt="Pedro Matos" src={imagePessoal} />
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 animate-pulse rounded-3xl bg-[#00ff88]/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}