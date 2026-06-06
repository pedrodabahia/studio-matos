import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import copakarkara from '../../image/copakarkara.png';
import qrcodedapraca from '../../image/qrcodedapraca.png';
import studiob from '../../image/studiob.png';
import sindisevim from '../../image/sindisevim.png';

const projects = [
  {
    image : studiob,
    title: "Landing Page Studio Marketing",
    category: "Landing Page",
    description: "Landing page para divulagção de agência de marketing",
    tags: ["React", "Vite.js", "tailwind"],
    link : "https://studiobmkt.vercel.app/"
  },
  { 
    image : sindisevim,
    title: "Sistema Emissão de Cartão",
    category: "Web sistema",
    description: "sistema de emissão de cartão para servidor de sindicato",
    tags: ["React", "Java", "postgresql"],
    link : "https://sindicatosystem.netlify.app/"
  },
  {
    image : copakarkara,
    title: "Landing page Copa esportiva",
    category: "Landing page",
    description: "Landing paeg para divulgação e transmição de copa esportiva municipal",
    tags: ["React", "Vite.js", "API"],
    link : "https://copakarkara.vercel.app/"
  },
  {
    image : qrcodedapraca,
    title: "Qr code Supermercado",
    category: "Web sistema",
    description: "Sistema de rotas para divulgação de produtos de hortifruit de supermercado",
    tags: ["Qrcode", "Routes", "React"],
    link : "https://hortifruitidapracaba.netlify.app/"
  },
];

export function Projects() {

  const handleClickProject = (projetNome: string) => {
    projects.map((project) => {
      if(projetNome == project.title){
        window.open(project.link)
      }


    })
  }

  return (
    <section id="projetos" className="relative px-6 py-32">
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
            Projetos
          </h2>
          <p className="text-xl text-white/70">
            Cases de sucesso e soluções entregues
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#00ff88]/20 bg-gradient-to-br from-black/80 to-[#0a0a0a] backdrop-blur-sm transition-all hover:border-[#00ff88] hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-video w-full overflow-hidden border-b border-[#00ff88]/20 bg-gradient-to-br from-[#00ff88]/20 to-transparent p-12">
                <div className="flex h-full items-center justify-center">
                  <img alt={project.title} src={project.image} />
                </div>
              </div>

              <div className="p-8">
                <div className="mb-2 text-sm font-semibold text-[#00ff88]">
                  {project.category}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-6 text-white/70">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-[#00ff88]/30 bg-[#00ff88]/10 px-3 py-1 text-sm text-[#00ff88]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ff88] transition-all hover:gap-3"
                  whileHover={{ x: 5 }}
                  onClick={() => handleClickProject(project.title)}
                >
                  Ver detalhes <ExternalLink className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-16 translate-y-16 rounded-full bg-[#00ff88]/10 blur-3xl transition-all group-hover:translate-x-12 group-hover:translate-y-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
