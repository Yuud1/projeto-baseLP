"use client"

import { motion } from "framer-motion"

export function VslSection() {
  return (
    <section className="relative overflow-hidden bg-[#121212] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(175,255,0,0.16),transparent_35%),linear-gradient(180deg,#121212_0%,#080808_100%)]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#AFFF00]/10 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#AFFF00]">VSL 1080x1920</span>
          <h2 className="mt-4 text-4xl font-black tracking-tighter text-white md:text-6xl">
            Uma narrativa vertical para vender o TurboSaaS em minutos.
          </h2>
          <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/55 md:text-base">
            Estruture sua promessa, mostre o problema, prove o resultado e chame para acao em um video pensado para
            mobile, ads e landing pages de alta conversao.
          </p>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
            {[
              { value: "9:16", label: "Formato" },
              { value: "1080p", label: "Largura" },
              { value: "1920p", label: "Altura" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black text-[#AFFF00]">{item.value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]"
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-[#AFFF00]/20 blur-2xl" />
          <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-[#AFFF00]/25 bg-[#050505] shadow-2xl shadow-[#AFFF00]/10">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#AFFF00]/18 via-transparent to-[#121212]" />

            <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">TurboSaaS VSL</span>
              <span className="h-2 w-2 rounded-full bg-[#AFFF00]" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                className="flex h-24 w-24 items-center justify-center rounded-full border border-[#AFFF00]/40 bg-[#AFFF00] text-[#121212] shadow-[0_0_60px_rgba(175,255,0,0.35)]"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Assistir VSL"
              >
                <span className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-[#121212]" />
              </motion.button>
            </div>

            <div className="absolute bottom-6 left-5 right-5 rounded-3xl border border-white/10 bg-[#121212]/80 p-5 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#AFFF00]">Preview vertical</p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-white">1080 x 1920</h3>
              <p className="mt-2 text-xs font-medium leading-relaxed text-white/50">
                Espaco pronto para seu video de vendas principal.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
