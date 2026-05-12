import { motion } from "framer-motion"
import GridMotion from "@/components/GridMotion"

export function GridMotionSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 opacity-75">
        <GridMotion gradientColor="#afff00" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/20 via-[#121212]/45 to-[#121212]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(18,18,18,0.2)_45%,#121212_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-end px-6 py-20 md:items-center md:py-28">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#AFFF00]">GridMotion</span>
          <h2 className="mt-4 text-5xl font-black tracking-tighter text-white md:text-7xl">
            Crescimento em movimento, operacao no controle.
          </h2>
          <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/60 md:text-base">
            Uma camada viva para representar os sinais, funis e automacoes que o TurboSaaS conecta.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#flavours"
              className="inline-flex items-center justify-center rounded-full bg-[#AFFF00] px-6 py-3 text-sm font-bold tracking-wide text-[#121212] shadow-[0_0_40px_rgba(175,255,0,0.25)]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Quero criar meu sistema
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
