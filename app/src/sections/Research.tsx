import { copy, useLang } from '@/i18n'

export default function Research() {
  const { lang } = useLang()
  const c = copy.research

  return (
    <section id="research" className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-24">
      <p className="reveal font-mono2 text-[12px] tracking-[0.18em] text-accent font-medium">
        {c.kicker[lang]}
      </p>
      <h2 className="reveal mt-3 font-extrabold tracking-tight text-[clamp(1.7rem,3.4vw,2.6rem)]" style={{ transitionDelay: '80ms' }}>
        {c.title[lang]}
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {c.items.map((it, i) => (
          <div
            key={it.title.en}
            className="reveal card-g rounded-2xl p-6 md:p-7 group hover:-translate-y-1 hover:border-[#c9cde4] transition-all duration-300"
            style={{ transitionDelay: `${140 + i * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono2 text-[12px] text-accent font-bold">0{i + 1}</span>
              <span className="w-2 h-2 bg-accent/70 group-hover:bg-accent transition-colors" />
            </div>
            <h3 className="mt-5 font-bold text-[18.5px] leading-snug tracking-tight">
              {it.title[lang]}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.8] text-soft">{it.desc[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
