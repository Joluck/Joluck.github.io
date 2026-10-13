import { publications, type Publication } from '@/data/profile'
import { copy, useLang } from '@/i18n'

const featuredIds: Publication['id'][] = ['miss', 'nora', 'memattn']

function VenueBadges({ p }: { p: Publication }) {
  const { lang } = useLang()
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {p.highlight && (
        <span className="font-mono2 text-[10.5px] font-bold uppercase bg-accent text-white rounded-md px-1.5 py-0.5">
          {p.highlight}
        </span>
      )}
      <span className="font-mono2 text-[10.5px] text-soft border border-line rounded-md px-1.5 py-0.5">
        {p.venueType === 'conference' ? p.venue : 'arXiv'}
      </span>
      <span className="font-mono2 text-[10.5px] text-soft border border-line rounded-md px-1.5 py-0.5">
        {copy.publications.topic[p.topic][lang]}
      </span>
    </div>
  )
}

function FeaturedCard({ p, delay }: { p: Publication; delay: number }) {
  const { lang } = useLang()
  const c = copy.publications
  const blurb = c.blurbs[p.id as keyof typeof c.blurbs]

  return (
    <article
      className="reveal card-g rounded-2xl p-6 md:p-7 flex flex-col group hover:-translate-y-1 hover:border-[#c9cde4] transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between gap-3">
        <VenueBadges p={p} />
        <span className="font-mono2 text-[12px] text-accent font-bold">{p.year}</span>
      </div>

      <a href={p.scholarLink} target="_blank" rel="noreferrer" className="mt-5">
        <h3 className="u-sweep inline font-extrabold text-[19px] leading-snug tracking-tight group-hover:text-accent transition-colors">
          {p.title}
        </h3>
      </a>
      <p className="mt-2 font-mono2 text-[12px] text-soft">{p.authors}</p>

      {blurb && <p className="mt-4 text-[14px] leading-[1.8] text-soft flex-1">{blurb[lang]}</p>}

      <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
        <span className="font-mono2 text-[15px] font-bold text-ink">
          {p.citations}
          <span className="ml-1 text-[10.5px] font-medium text-soft">{c.citations[lang]}</span>
        </span>
        <span className="flex items-center gap-3 font-mono2 text-[12px] text-accent font-medium">
          <a href={p.scholarLink} target="_blank" rel="noreferrer" className="u-sweep">
            Scholar ↗
          </a>
          {p.arxivLink && (
            <a href={p.arxivLink} target="_blank" rel="noreferrer" className="u-sweep">
              arXiv ↗
            </a>
          )}
        </span>
      </div>
    </article>
  )
}

export default function Publications() {
  const { lang } = useLang()
  const c = copy.publications

  const featured = featuredIds
    .map((id) => publications.find((p) => p.id === id)!)
    .filter(Boolean)
  const others = publications
    .filter((p) => !featuredIds.includes(p.id))
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="publications" className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-24">
      <p className="reveal font-mono2 text-[12px] tracking-[0.18em] text-accent font-medium">
        {c.kicker[lang]}
      </p>
      <h2 className="reveal mt-3 font-extrabold tracking-tight text-[clamp(1.7rem,3.4vw,2.6rem)]" style={{ transitionDelay: '80ms' }}>
        {c.featuredTitle[lang]}
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {featured.map((p, i) => (
          <FeaturedCard key={p.id} p={p} delay={140 + i * 80} />
        ))}
      </div>

      <h3 className="reveal mt-14 font-mono2 text-[12px] tracking-[0.18em] text-soft uppercase">
        {c.othersTitle[lang]}
      </h3>
      <div className="reveal card-g rounded-2xl mt-4 overflow-hidden" style={{ transitionDelay: '100ms' }}>
        {others.map((p, i) => (
          <article
            key={p.id}
            className={`group grid grid-cols-12 gap-x-4 gap-y-1.5 items-center px-5 md:px-7 py-4.5 py-5 ${
              i > 0 ? 'border-t border-line' : ''
            } hover:bg-[#f7f8fc] transition-colors`}
          >
            <div className="col-span-2 md:col-span-1 font-mono2 text-[13px] text-accent font-bold">
              {p.year}
            </div>
            <div className="col-span-10 md:col-span-7">
              <a href={p.scholarLink} target="_blank" rel="noreferrer">
                <h4 className="u-sweep inline font-semibold text-[15px] leading-snug tracking-tight group-hover:text-accent transition-colors">
                  {p.title}
                </h4>
              </a>
              <p className="mt-0.5 text-[12.5px] text-soft truncate">{p.authors}</p>
            </div>
            <div className="col-span-7 col-start-3 md:col-span-2 md:col-start-auto flex md:justify-end">
              <VenueBadges p={p} />
            </div>
            <div className="col-span-5 md:col-span-2 flex items-center justify-end gap-3">
              <span className="font-mono2 text-[14px] font-bold text-ink">
                {p.citations}
                <span className="ml-1 text-[10.5px] font-medium text-soft">{c.citations[lang]}</span>
              </span>
              <span className="hidden md:flex gap-2.5 font-mono2 text-[11.5px] text-accent">
                <a href={p.scholarLink} target="_blank" rel="noreferrer" className="u-sweep">S</a>
                {p.arxivLink && (
                  <a href={p.arxivLink} target="_blank" rel="noreferrer" className="u-sweep">X</a>
                )}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
