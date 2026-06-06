import { motion } from "motion/react";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Vite.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Java", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Firebase", category: "Backend" },
  { name: "Vercel", category: "Deploy" },
  { name: "GraphQL", category: "API" },
  { name: "Docker", category: "DevOps" },
];

export function Technologies() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Tecnologias de Ponta
          </h3>
          <p className="text-lg text-white/70">
            Stack moderna para entregar as melhores soluções
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-[#00ff88]/20 bg-gradient-to-br from-black/80 to-[#0a0a0a] p-4 text-center backdrop-blur-sm transition-all hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10">
                <p className="mb-1 font-semibold text-white">
                  {tech.name}
                </p>
                <p className="text-xs text-[#00ff88]/70">
                  {tech.category}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-8 translate-y-8 rounded-full bg-[#00ff88]/10 blur-2xl transition-all group-hover:translate-x-4 group-hover:translate-y-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}