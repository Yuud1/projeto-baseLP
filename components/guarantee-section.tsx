"use client"

import { motion } from "framer-motion"

/** Troque por `/garantia.jpg` (ou outro arquivo em `public/`) quando tiver a foto final. */
const GUARANTEE_PHOTO_SRC =
  "/placeholder.svg?height=560&width=440&query=professional founder portrait confident warm lighting"

export function GuaranteeSection() {
  return (
    <section className="relative overflow-hidden bg-[#121212] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(175,255,0,0.14),transparent_40%),linear-gradient(180deg,#121212_0%,#080808_100%)]" />
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-[#AFFF00]/12 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-stretch lg:gap-12 xl:grid-cols-[minmax(0,380px)_1fr] xl:gap-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30 sm:max-w-sm lg:mx-0 lg:aspect-auto lg:max-w-none lg:min-h-[min(100%,420px)]">
            <img
              src={GUARANTEE_PHOTO_SRC}
              alt="Retrato de quem oferece a garantia do programa"
              width={440}
              height={560}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#AFFF00]">Garantia insana</span>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-white md:text-6xl">
              Garantia de <span className="text-[#AFFF00]">120 dias</span>!
            </h2>
            <div className="mt-5 space-y-4 text-base font-medium leading-relaxed text-white/70 md:text-lg">
              <p>
                Se você não faturar no mínimo R$ 1.000,00 nos próximos 120 dias, eu devolvo 100% do seu valor investido.
              </p>
              <p>
                Eu tenho tanta certeza que com a Loja Profissional que eu vou te entregar + o Método Marco Zero é
                impossível você não ter resultado, que eu criei essa garantia insana.
              </p>
              <p>
                Sem burocracia alguma: se você seguir os passos e não tiver resultados, eu te devolvo o valor de volta na
                hora.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
