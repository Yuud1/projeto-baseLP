"use client"

import { motion } from "framer-motion"

const valueItems: { label: string; price?: string }[] = [
  { label: "Treinamento Marco Zero", price: "R$ 497,00" },
  { label: "20 Produtos Vencedores", price: "R$ 197,00" },
  { label: "Suporte personalizado comigo e minha equipe", price: "Incluso" },
  { label: "Garantia condicional de 120 dias", price: "Incluso" },
]

export function OfferSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f7f7] via-white to-[#f7f7f7]" />
      <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#AFFF00]/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 lg:max-w-6xl">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border-2 border-[#121212]/10 bg-white p-7 shadow-2xl shadow-[#121212]/10 md:p-10 lg:p-12"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_12%,rgba(175,255,0,0.22),transparent_40%)] lg:bg-[radial-gradient(circle_at_85%_35%,rgba(175,255,0,0.2),transparent_45%)]" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#121212]/50">Oferta de hoje</span>
              <h2 className="mt-4 text-3xl font-black tracking-tighter text-[#121212] md:text-4xl">
                Quanto Será que Vale Tudo Isso?
              </h2>

              <ul className="mt-8 divide-y divide-[#121212]/10 border-y border-[#121212]/10">
                {valueItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col gap-1 py-4 text-sm font-semibold text-[#121212] sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:text-base"
                  >
                    <span className="leading-snug">{item.label}</span>
                    {item.price && (
                      <span className="shrink-0 font-mono text-sm font-bold tracking-tight text-[#121212]/80 md:text-base">
                        {item.price}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3 rounded-2xl bg-[#121212]/[0.04] p-5 font-mono text-sm font-bold text-[#121212] md:text-base">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="text-[#121212]/70">R$ 497,00</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#121212]/50 md:text-sm">
                    Acesso completo ao Marco Zero
                  </span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="text-[#121212]/70">+ R$ 197,00</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#121212]/50 md:text-sm">
                    Bônus exclusivos
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-[#121212]/10 pt-10 lg:w-[min(100%,380px)] lg:shrink-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:w-[min(100%,440px)] xl:pl-14">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.25em] text-[#121212]/50">De</p>
                <p className="mt-1 font-mono text-sm tracking-[0.25em] text-red-500/55 line-through decoration-red-500/45">
                  R$ 990,00
                </p>
              </div>

              <div className="mt-2">
                <p className="font-mono text-sm uppercase tracking-[0.25em] text-[#121212]/50">Por apenas</p>
                <p className="mt-1 text-6xl font-black tracking-tighter text-[#121212] md:text-7xl lg:text-6xl xl:text-7xl">
                  R$ 97,00
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-base font-bold leading-snug text-[#121212] md:text-lg">
                  Você economiza mais de <span className="font-black tracking-tight">R$ 1.000,00</span>
                </p>
                <p className="text-sm font-medium leading-relaxed text-[#121212]/55 md:text-base">
                  Toque agora no botão abaixo e garanta sua vaga:
                </p>
              </div>

              <motion.a
                href="#flavours"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#AFFF00] px-6 py-4 text-sm font-black tracking-wide text-[#121212] shadow-[0_0_40px_rgba(175,255,0,0.35)]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Quero criar meu sistema agora
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
