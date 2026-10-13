import { SCHOLAR_URL, GITHUB_URL, X_URL, EMAIL } from '@/data/profile'
import { copy, useLang } from '@/i18n'
import PixelFeather from '@/components/PixelFeather'
import { GithubIcon, XIcon } from '@/components/icons'

export default function Footer() {
  const { lang } = useLang()
  const c = copy.footer

  return (
    <footer id="contact" className="border-t border-line bg-white/60">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="reveal font-mono2 text-[12px] tracking-[0.18em] text-accent font-medium">
              {c.kicker[lang]}
            </p>
            <p className="reveal mt-3 font-bold tracking-tight text-[clamp(1.4rem,2.6vw,2rem)] max-w-xl leading-snug" style={{ transitionDelay: '80ms' }}>
              {c.line[lang]}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="reveal mt-4 inline-flex items-center gap-2 font-mono2 text-[14px] text-ink hover:text-accent transition-colors"
              style={{ transitionDelay: '120ms' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              <span className="u-sweep">{EMAIL}</span>
            </a>
            <div className="reveal mt-5 flex flex-wrap items-center gap-3" style={{ transitionDelay: '160ms' }}>
              <a
                href={SCHOLAR_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-accent hover:bg-[var(--accent-deep)] text-white text-[13.5px] font-semibold rounded-lg px-4 py-2.5 transition-colors"
              >
                Google Scholar ↗
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-line bg-white hover:border-[#c9cde4] text-[13.5px] font-medium rounded-lg px-4 py-2.5 transition-colors"
              >
                <GithubIcon size={14} /> Joluck ↗
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-line bg-white hover:border-[#c9cde4] text-[13.5px] font-medium rounded-lg px-4 py-2.5 transition-colors"
              >
                <XIcon size={13} /> @Jo1uck ↗
              </a>
            </div>
          </div>
          <div className="reveal flex items-center gap-4 md:text-right" style={{ transitionDelay: '200ms' }}>
            <PixelFeather size={52} />
            <div className="font-mono2 text-[12px] leading-relaxed text-soft">
              <p>{c.verified[lang]}</p>
              <p className="mt-1">{c.source[lang]}</p>
              <a href="#top" className="u-sweep inline-block mt-2 text-accent font-medium">
                {c.top[lang]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
