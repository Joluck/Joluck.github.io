import { copy, useLang, type Lang } from '@/i18n'
import PixelFeather from '@/components/PixelFeather'

export default function Header() {
  const { lang, setLang } = useLang()
  const nav = copy.header.nav

  const LangBtn = ({ l, label }: { l: Lang; label: string }) => (
    <button
      onClick={() => setLang(l)}
      className={`px-2.5 py-1 rounded-[6px] text-[12px] font-mono2 font-medium transition-colors ${
        lang === l ? 'bg-accent text-white' : 'text-soft hover:text-ink'
      }`}
    >
      {label}
    </button>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-[#eef0f6]/85 backdrop-blur-md">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <PixelFeather size={30} />
          <span className="font-extrabold tracking-tight text-[17px]">{copy.header.name[lang]}</span>
          <span className="hidden sm:inline font-mono2 text-[11px] text-soft border border-line rounded-md px-1.5 py-0.5 bg-white">
            {copy.header.badge}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[14px] text-soft">
          <a href="#research" className="hover:text-ink transition-colors">{nav.research[lang]}</a>
          <a href="#publications" className="hover:text-ink transition-colors">{nav.publications[lang]}</a>
          <a href="#contact" className="hover:text-ink transition-colors">{nav.contact[lang]}</a>
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center border border-line rounded-lg bg-white p-0.5">
            <LangBtn l="zh" label="中" />
            <LangBtn l="en" label="EN" />
          </div>
        </div>
      </div>
    </header>
  )
}
