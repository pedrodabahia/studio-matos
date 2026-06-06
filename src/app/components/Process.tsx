import { motion } from "motion/react";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico do negócio",
    description: "Entendemos suas necessidades e objetivos",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planejamento estratégico",
    description: "Criamos a estratégia ideal para seu projeto",
  },
  {
    number: "03",
    icon: Code,
    title: "Design e desenvolvimento",
    description: "Transformamos ideias em realidade digital",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega e suporte",
    description: "Lançamento e acompanhamento contínuo",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4 bg-gradient-to-r from-white to-[#00ff88] bg-clip-text text-5xl font-bold text-transparent md:text-6xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Nosso Processo
          </h2>
          <p className="text-xl text-white/70">
            Do conceito ao lançamento, com excelência em cada etapa
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#00ff88]/50 via-[#00ff88]/20 to-transparent max-md:hidden" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative grid gap-8 md:grid-cols-2 ${isEven ? "" : "md:text-right"}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`${isEven ? "md:pr-12" : "md:order-2 md:pl-12"}`}>
                    <div className={`inline-block ${isEven ? "" : "md:text-right"}`}>
                      <div className="mb-4 text-6xl font-bold text-[#00ff88]/20">
                        {step.number}
                      </div>
                      <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg border border-[#00ff88]/30 bg-[#00ff88]/10`}>
                        <Icon className="h-8 w-8 text-[#00ff88]" />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-lg text-white/70">{step.description}</p>
                    </div>
                  </div>

                  <div className={isEven ? "md:order-2" : ""} />

                  <div className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center max-md:hidden">
                    <div className="h-4 w-4 rounded-full border-2 border-[#00ff88] bg-black" />
                    <div className="absolute h-8 w-8 animate-ping rounded-full bg-[#00ff88]/30" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
