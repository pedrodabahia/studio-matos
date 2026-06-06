import { motion } from "motion/react";
import { Code2, Users, Rocket, Star } from "lucide-react";

const stats = [
  { icon: Code2, value: "", label: "Foco em resultados reais" },
  {
    icon: Users,
    value: "",
    label: "Atendimento personalizado",
  },
  { icon: Rocket, value: "", label: "Desenvolvimento moderno" },
  { icon: Star, value: "", label: "Evolução constante" },
];

export function Stats() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#00ff88]/30 bg-[#00ff88]/10">
                  <Icon className="h-8 w-8 text-[#00ff88]" />
                </div>
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}