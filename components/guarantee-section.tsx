"use client"

import { motion } from "framer-motion"

export function GuaranteeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#AFFF00]/5 to-white" />
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-[#AFFF00]/20 blur-[110px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <motion.div
          className="rounded-[2rem] bg-[#121212] p-7 text-white shadow-2xl shadow-[#121212]/10 md:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#AFFF00]">Garantia insana</span>
          <h2 className="mt-4 text-4xl font-black tracking-tighter md:text-6xl">Garantia de 120 dias!</h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-white/70 md:text-lg">
            Se você não faturar no mínimo R$ 1.000 nos próximos 120 dias, eu devolvo 100% do seu valor investido.
          </p>

          <div className="mt-8 space-y-4 text-sm font-medium leading-relaxed text-white/60 md:text-base">
            <p>
              Eu tenho tanta certeza que com a Loja Profissional que eu vou te entregar + o Método Marco Zero é
              impossível você não ter resultado, que eu criei essa garantia insana.
            </p>
            <p>
              Sem burocracia alguma: se você seguir os passos e não tiver resultados, eu te devolvo o valor de volta na
              hora.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[2rem] border-2 border-[#121212]/10 bg-white p-7 shadow-2xl shadow-[#121212]/10 md:p-10"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(175,255,0,0.28),transparent_35%)]" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#121212]/50">Oferta de hoje</span>
              <div className="mt-6">
                <p className="font-mono text-sm uppercase tracking-[0.25em] text-[#121212]/40">De</p>
                <p className="mt-1 text-5xl font-black tracking-tighter text-[#121212]/25 line-through">R$ 990</p>
              </div>

              <div className="mt-8">
                <p className="font-mono text-sm uppercase tracking-[0.25em] text-[#121212]/50">Por apenas</p>
                <p className="mt-1 text-7xl font-black tracking-tighter text-[#121212] md:text-8xl">R$ 97</p>
              </div>
            </div>

            <motion.a
              href="#flavours"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#AFFF00] px-6 py-4 text-sm font-black tracking-wide text-[#121212] shadow-[0_0_40px_rgba(175,255,0,0.35)]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Quero criar meu sistema agora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
