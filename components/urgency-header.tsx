"use client"

const today = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date())

export function UrgencyHeader() {
  return (
    <div className="bg-red-600 px-4 py-2 text-center text-xs font-medium uppercase tracking-[0.14em] text-white shadow-lg shadow-red-950/20 md:text-sm">
      <strong className="font-black">7 vagas</strong> disponíveis para hoje,{" "}
      <strong className="font-black">{today}</strong>, com{" "}
      <strong className="font-black">R$ 1.000 de desconto</strong>
    </div>
  )
}
