import { useState } from 'react'
import { SCHOLAR_URL, GITHUB_URL, X_URL } from '@/data/profile'
import { copy, useLang } from '@/i18n'
import PixelFeather from '@/components/PixelFeather'
import { GithubIcon, XIcon } from '@/components/icons'


function CopyCard() {
  const { lang } = useLang()
  const [done, setDone] = useState(false)
  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(SCHOLAR_URL)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = SCHOLAR_URL
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setDone(true)
    setTimeout(() => setDone(false), 1600)
  }
  return (
    <div className="card-g rounded-xl flex items-center gap-2 pl-4 pr-2 py-2 max-w-full">
      <code className="font-mono2 text-[13px] text-ink font-medium truncate">{copy.hero.evolve[lang]}</code>
      <button
        onClick={doCopy}
        aria-label={copy.hero.copyLabel[lang]}
        className="shrink-0 flex items-center gap-1.5 border border-line rounded-lg px-2.5 py-1.5 text-[12px] text-soft hover:text-ink hover:border-[#c9cde4] transition-colors"
      >
        {done ? (
          <span className="text-accent font-medium">{copy.hero.copied[lang]}</span>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  )
}

function TerminalCard() {
  const t = copy.terminal
  return (
    <div className="card-g rounded-2xl overflow-hidden">
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 h-11 border-b border-line bg-white">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono2 text-[12px] text-soft truncate">{t.title}</span>
        <span className="ml-auto font-mono2 text-[11px] text-soft/70">{t.version}</span>
      </div>

      {/* body */}
      <div className="bg-[var(--term-bg)] px-5 py-5 font-mono2 text-[12.5px] leading-[1.9]">
        <p className="text-soft">
          <span className="text-accent font-semibold">$</span> {t.cmd1.slice(2)}
        </p>
        <div className="mt-1 mb-3">
          {t.stats.map(([k, v], i) => (
            <p key={k} className="flex justify-between max-w-[300px]">
              <span className="text-soft">
                {i === t.stats.length - 1 ? '└' : '├'} {k}
              </span>
              <span className="text-accent font-bold">{v}</span>
            </p>
          ))}
        </div>
        <p className="text-soft">
          <span className="text-accent font-semibold">$</span> {t.cmd2.slice(2)}
        </p>
        <div className="mt-1">
          {t.top.map(([name, venue, cites]) => (
            <p key={name} className="flex justify-between max-w-[340px]">
              <span className="text-ink">{name}</span>
              <span className="text-soft">
                {venue} · <span className="text-accent font-bold">{cites}</span>
              </span>
            </p>
          ))}
        </div>
        <p className="mt-3 text-soft caret" />
      </div>

      {/* status bar */}
      <div className="flex items-center justify-between px-4 h-9 border-t border-line bg-white font-mono2 text-[11px]">
        <span className="bg-accent text-white rounded px-1.5 py-0.5 font-semibold">{t.statusLeft}</span>
        <span className="text-soft hidden sm:inline">{t.statusMid}</span>
        <span className="text-accent font-semibold">{t.statusRight}</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const { lang } = useLang()
  const c = copy.hero

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* grid backdrop */}
      <div className="grid-bg absolute inset-0 pointer-events-none" aria-hidden />
      {/* scattered pixel dots */}
      <div className="absolute left-[12%] top-[30%] w-1.5 h-1.5 bg-accent/60" aria-hidden />
      <div className="absolute left-[46%] top-[16%] w-1 h-1 bg-accent/40" aria-hidden />
      <div className="absolute right-[8%] top-[24%] w-1.5 h-1.5 bg-accent/50" aria-hidden />
      <div className="absolute right-[30%] top-[12%] w-1 h-1 bg-accent/30" aria-hidden />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24 grid grid-cols-12 gap-x-8 gap-y-14 items-center">
        {/* left */}
        <div className="col-span-12 lg:col-span-6">
          <div className="reveal flex flex-wrap gap-2">
            {c.badges.map((b) => (
              <span
                key={b.en}
                className="font-mono2 text-[11.5px] text-ink border border-line rounded-lg bg-white px-2.5 py-1.5 shadow-sm"
              >
                {b[lang]}
              </span>
            ))}
          </div>

          <p className="reveal font-mono2 text-[13px] text-soft mt-8" style={{ transitionDelay: '120ms' }}>
            {c.nameMono[lang]}
          </p>
          <div className="reveal mt-2 flex items-center gap-5 md:gap-7" style={{ transitionDelay: '160ms' }}>
            <h1 className="font-extrabold tracking-tight leading-[1.02] text-[clamp(3rem,7vw,5.2rem)]">
              {lang === 'zh' ? (
                <>
                  <span className="text-ink">{c.nameInk.zh}</span>
                  <span className="text-accent">{c.nameAccent.zh}</span>
                </>
              ) : (
                <>
                  <span className="text-accent">{c.nameAccent.en}</span>
                  <span className="text-ink">{c.nameInk.en}</span>
                </>
              )}
            </h1>
            <div className="relative shrink-0 self-center origin-center scale-[0.72] sm:scale-90 md:scale-100">
              <PixelFeather size={92} animClass="tilt-45" />
              <span className="absolute -top-8 left-[38%] whitespace-nowrap font-mono2 text-[11.5px] bg-white border border-line rounded-lg px-2 py-1 shadow-sm">
                {c.bubble[lang]}
              </span>
            </div>
          </div>

          <p
            className="reveal mt-6 text-[16px] md:text-[17px] leading-[1.75] text-ink font-medium max-w-xl"
            style={{ transitionDelay: '220ms' }}
          >
            {c.tagline[lang]}
          </p>
          <p className="reveal mt-3 text-[14px] leading-[1.8] text-soft max-w-xl" style={{ transitionDelay: '280ms' }}>
            {c.sub[lang]}
          </p>

          <div className="reveal mt-8 max-w-xl" style={{ transitionDelay: '340ms' }}>
            <CopyCard />
          </div>

          <div className="reveal mt-6 flex flex-wrap items-center gap-3" style={{ transitionDelay: '400ms' }}>
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-12 bg-accent hover:bg-[var(--accent-deep)] text-white text-[14.5px] font-semibold rounded-xl px-5 transition-colors"
            >
              {c.primaryBtn[lang]}
            </a>
            <a
              href="#publications"
              className="inline-flex items-center justify-center gap-1.5 h-12 border border-line bg-white hover:border-[#c9cde4] text-[14.5px] font-medium rounded-xl px-5 transition-colors"
            >
              {c.ghostBtn1[lang]}
            </a>
            <a
              href="#research"
              className="inline-flex items-center justify-center gap-1.5 h-12 border border-line bg-white hover:border-[#c9cde4] text-[14.5px] font-medium rounded-xl px-5 transition-colors"
            >
              {c.ghostBtn2[lang]}
            </a>
            <span className="flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-12 h-12 border border-line bg-white hover:border-[#c9cde4] text-ink rounded-xl transition-colors"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="inline-flex items-center justify-center w-12 h-12 border border-line bg-white hover:border-[#c9cde4] text-ink rounded-xl transition-colors"
              >
                <XIcon size={16} />
              </a>
            </span>
          </div>
        </div>

        {/* right — terminal */}
        <div className="col-span-12 lg:col-span-6 reveal" style={{ transitionDelay: '240ms' }}>
          <TerminalCard />
        </div>
      </div>
    </section>
  )
}
