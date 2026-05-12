"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer id="careers" className="relative bg-[#121212] pt-8 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="relative z-10 grid gap-10 pt-5 pb-8 md:grid-cols-[1fr_auto] md:items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="max-w-xl">
            <motion.span
              className="inline-block text-xl font-black tracking-tighter"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="text-white">Turbo</span>
              <span className="text-[#AFFF00]">SaaS</span>
            </motion.span>
            <p className="mt-4 text-xs font-medium leading-relaxed text-white/60">
              TurboSaaS e a plataforma para automatizar operacoes, acompanhar metricas e acelerar crescimento com
              simplicidade.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            {[
              { label: "Politica de privacidade", href: "#privacidade" },
              { label: "Termos de uso", href: "#termos" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="font-mono text-xs text-white/50 transition-colors hover:text-[#AFFF00]"
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="relative z-10 border-t border-white/10 pt-6 text-center font-mono text-xs text-white/40 md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          © 2026 TurboSaaS. Todos os direitos reservados.
        </motion.p>
      </div>

      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center text-[22vw] font-black text-white/[0.02] pointer-events-none select-none leading-none whitespace-nowrap"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        TurboSaaS
      </motion.div>
    </footer>
  )
}
