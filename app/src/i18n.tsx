import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'zh' | 'en'

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'zh',
  setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('jk-lang')
    return saved === 'en' || saved === 'zh' ? saved : 'zh'
  })
  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('jk-lang', l)
  }
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

export const copy = {
  header: {
    badge: 'researcher',
    name: { zh: '康嘉乐', en: 'Jiale Kang' },
    nav: {
      research: { zh: '研究方向', en: 'Research' },
      publications: { zh: '论文发表', en: 'Publications' },
      contact: { zh: '联系', en: 'Contact' },
    },
  },
  hero: {
    badges: [
      { zh: '收录 · Google Scholar', en: 'Listed · Google Scholar' },
      { zh: 'ICLR 2026 · MiSS', en: 'ICLR 2026 · MiSS' },
      { zh: 'ICML 2026 · RLVR', en: 'ICML 2026 · RLVR' },
      { zh: 'EMNLP 2025 · Oral', en: 'EMNLP 2025 · Oral' },
    ],
    nameMono: { zh: '个人学术主页 · HOMEPAGE', en: 'jiale kang · academic homepage' },
    nameInk: { zh: '康', en: ' Kang' },
    nameAccent: { zh: '嘉乐', en: 'Jiale' },
    tagline: {
      zh: '研究参数高效微调、线性注意力与记忆注意力机制，为大模型的高效适配补上关键拼图。',
      en: 'Research on parameter-efficient fine-tuning, linear attention and memory attention — the missing piece for efficient LLM adaptation.',
    },
    sub: {
      zh: '工作发表于 ICLR、ICML、EMNLP 等会议。',
      en: 'Work published at ICLR, ICML, EMNLP and beyond.',
    },
    copyLabel: { zh: '复制', en: 'Copy' },
    copied: { zh: '已复制', en: 'Copied' },
    evolve: { zh: '加入光荣的进化吧', en: 'Join the glorious evolution' },
    primaryBtn: { zh: 'Google Scholar ↗', en: 'Google Scholar ↗' },
    ghostBtn1: { zh: '浏览论文 →', en: 'Publications →' },
    ghostBtn2: { zh: '研究方向', en: 'Research' },
    bubble: { zh: '求个引用 ✦', en: 'cite me ✦' },
  },
  terminal: {
    title: 'jiale-kang — stats · 80×24',
    version: 'v2026.10',
    cmd1: '$ stats --scholar --github',
    stats: [
      ['citations', '35'],
      ['github stars', '415'],
    ],
    cmd2: '$ github list --featured',
    top: [
      ['1. Memory-Attn', "arXiv'26", '★36'],
      ['2. NoRA', "arXiv'26", '★57'],
      ['3. MiSS', "ICLR'26", '★36'],
    ],
    statusLeft: 'J.L',
    statusMid: "ICLR'26 · ICML'26 · EMNLP",
    statusRight: 'cites 35 · ★415',
  },
  research: {
    kicker: { zh: '研究方向 · RESEARCH', en: 'RESEARCH · INTERESTS' },
    title: { zh: '三个方向，一条主线：效率', en: 'Three directions, one theme: efficiency' },
    items: [
      {
        title: { zh: '参数高效微调', en: 'Parameter-Efficient Fine-Tuning' },
        desc: {
          zh: '重新审视 LoRA 的效率—效果权衡：共享分片结构、归一化低秩适配，以及在 RLVR 场景下对 PEFT 方法的系统评测。',
          en: 'Re-examining the efficiency–effectiveness trade-off of LoRA: shard-sharing structures, normalized low-rank adaptation, and systematic evaluation of PEFT methods under RLVR.',
        },
      },
      {
        title: { zh: 'Linear-Attention', en: 'Linear-Attention' },
        desc: {
          zh: '基于 RWKV 的线性注意力架构研究，把 Transformer 的能力迁移到线性时间复杂度。',
          en: 'Linear-attention architectures based on RWKV — transferring Transformer capabilities into linear time.',
        },
      },
      {
        title: { zh: 'Memory Attention', en: 'Memory Attention' },
        desc: {
          zh: '以 token 索引记忆替代注意力的 value 投影，在相同训练预算下提升语言建模与基准表现。',
          en: "Token-indexed memory replacing attention's value projection, improving language modeling and benchmarks under matched training budgets.",
        },
      },
    ],
  },
  publications: {
    kicker: { zh: '论文发表 · PUBLICATIONS', en: 'PUBLICATIONS · PAPERS' },
    featuredTitle: { zh: '代表作', en: 'Selected Works' },
    othersTitle: { zh: '其他论文', en: 'Other Publications' },
    citations: { zh: '引用', en: 'Cites' },
    firstAuthor: { zh: '第一作者', en: 'First author' },
    viewPaper: { zh: '查看论文', en: 'View paper' },
    blurbs: {
      miss: {
        zh: '以高效的分片共享结构重新审视 LoRA 的效率—效果权衡，用更少的参数达成更强的适配效果。',
        en: 'Revisits the efficiency–effectiveness trade-off of LoRA with an efficient shard-sharing structure — stronger adaptation with fewer parameters.',
      },
      nora: {
        zh: '归一化低秩适配：对低秩增量进行归一化约束，让参数高效微调更稳定、更可控。',
        en: 'Normalized Low-Rank Adaptation: normalizing low-rank increments for more stable and controllable parameter-efficient fine-tuning.',
      },
      memattn: {
        zh: '一种面向线性时间序列建模的记忆注意力机制，探索高效架构的记忆能力。',
        en: 'A memory attention mechanism for linear-time sequence modeling, exploring memory capacity in efficient architectures.',
      },
    },
    topic: {
      peft: { zh: '参数高效微调', en: 'PEFT' },
      linear: { zh: '线性时间建模', en: 'Linear-time' },
      multimodal: { zh: '多模态感知', en: 'Multimodal' },
      arch: { zh: '架构与深度扩展', en: 'Architecture' },
    },
  },
  footer: {
    kicker: { zh: '联系 · CONTACT', en: 'CONTACT · COLLAB' },
    line: {
      zh: '欢迎就高效微调、线性注意力与记忆机制方向交流合作。',
      en: 'Open to collaboration on efficient fine-tuning, linear attention, and memory mechanisms.',
    },
    verified: {
      zh: '康嘉乐',
      en: 'Jiale Kang',
    },
    source: {
      zh: '数据来源 Google Scholar · 更新于 2026 年 10 月',
      en: 'Data from Google Scholar · Updated Oct 2026',
    },
    top: { zh: '回到顶部 ↑', en: 'Back to top ↑' },
  },
} as const
