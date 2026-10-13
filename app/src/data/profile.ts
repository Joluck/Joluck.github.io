export const SCHOLAR_URL =
  'https://scholar.google.com/citations?user=tMihzcoAAAAJ&hl=zh-CN'
export const GITHUB_URL = 'https://github.com/Joluck'
export const X_URL = 'https://x.com/Jo1uck'
export const EMAIL = 'kangjiale827@gmail.com'

export const stats = {
  citations: 35,
  hIndex: 3,
  i10Index: 1,
  publications: 8,
}

export const citationsByYear = [
  { year: 2025, count: 14 },
  { year: 2026, count: 21 },
]

export const interests = [
  {
    no: '01',
    title: '参数高效微调',
    titleEn: 'Parameter-Efficient Fine-Tuning',
    desc: '重新审视 LoRA 的效率—效果权衡：共享分片结构、归一化低秩适配，以及在 RLVR 场景下对 PEFT 方法的系统评测。',
  },
  {
    no: '02',
    title: '线性时间序列建模',
    titleEn: 'Linear-Time Sequence Modeling',
    desc: '基于 RWKV 的线性注意力架构研究，探索记忆注意力机制与 Transformer 能力的线性时间迁移。',
  },
  {
    no: '03',
    title: '多模态与开放世界感知',
    titleEn: 'Multimodal & Open-World Perception',
    desc: '跨模态对比学习、开放世界目标检测，以及多模态能力在高效骨干网络上的实现。',
  },
]

export type Publication = {
  id: 'c3owd' | 'miss' | 'rlvr' | 'arena' | 'modrwkv' | 'memattn' | 'nora' | 'depthbench'
  year: number
  /** YYYY-MM, used for chronological sorting */
  date: string
  title: string
  authors: string
  venue: string
  venueType: 'conference' | 'preprint'
  citations: number
  topic: 'peft' | 'linear' | 'multimodal' | 'arch'
  scholarLink: string
  arxivLink?: string
  highlight?: string
}

export const publications: Publication[] = [
  {
    id: 'c3owd',
    date: '2025-09',
    year: 2025,
    title:
      'C3-OWD: A Curriculum Cross-modal Contrastive Learning Framework for Open-World Detection',
    authors: 'S Wang, Z Li, Y Li, C Xiao, H Zhan, Z Yao, X Zhang, J Kang, L Li, W Liu, et al.',
    venue: 'arXiv:2509.23316',
    venueType: 'preprint',
    citations: 14,
    topic: 'multimodal',
    scholarLink:
      'https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=tMihzcoAAAAJ&citation_for_view=tMihzcoAAAAJ:9yKSN-GCB0IC',
    arxivLink: 'https://arxiv.org/abs/2509.23316',
  },
  {
    year: 2026,
    title: 'MiSS: Revisiting the Trade-off in LoRA with an Efficient Shard-Sharing Structure',
    authors: 'J Kang, Q Yin',
    id: 'miss',
    date: '2026-01',
    venue: 'ICLR 2026',
    venueType: 'conference',
    citations: 9,
    topic: 'peft',
    scholarLink:
      'https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=tMihzcoAAAAJ&citation_for_view=tMihzcoAAAAJ:IjCSPb-OGe4C',
    highlight: 'ICLR',
  },
  {
    year: 2026,
    title: 'Evaluating Parameter Efficient Methods for RLVR',
    authors: 'Q Yin, Y Wu, Z Shen, S Li, Z Wang, Y Li, CT Leong, J Kang, J Gu',
    id: 'rlvr',
    date: '2025-12',
    venue: 'ICML 2026',
    venueType: 'conference',
    citations: 9,
    topic: 'peft',
    scholarLink:
      'https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=tMihzcoAAAAJ&citation_for_view=tMihzcoAAAAJ:Tyk-4Ss8FVUC',
    arxivLink: 'https://arxiv.org/abs/2512.23165',
    highlight: 'ICML',
  },
  {
    year: 2026,
    title:
      'PEFT-Arena: Understanding Parameter-Efficient Finetuning from a Stability-Plasticity Perspective',
    authors: 'Y Huang, R Peng, Z Qiu, J Kang, Y Wen, B Schölkopf, W Liu',
    id: 'arena',
    date: '2026-05',
    venue: 'EMNLP 2026',
    venueType: 'conference',
    citations: 2,
    topic: 'peft',
    scholarLink:
      'https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=tMihzcoAAAAJ&citation_for_view=tMihzcoAAAAJ:zYLM7Y9cAGgC',
    arxivLink: 'https://arxiv.org/abs/2605.28819',
    highlight: 'EMNLP',
  },
  {
    year: 2025,
    title: 'ModRWKV: Transformer Multimodality in Linear Time',
    authors: 'J Kang, Z Yue, Q Yin, R Jiang, W Li, Z Lu, Z Ji',
    id: 'modrwkv',
    date: '2025-05',
    venue: 'EMNLP 2025 · Oral',
    venueType: 'conference',
    citations: 1,
    topic: 'linear',
    scholarLink:
      'https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=tMihzcoAAAAJ&citation_for_view=tMihzcoAAAAJ:d1gkVwhDpl0C',
    highlight: 'Oral',
  },
  {
    year: 2026,
    title: 'Memory Attention',
    authors: 'J Kang',
    id: 'memattn',
    date: '2026-09',
    venue: 'arXiv:2609.28399',
    venueType: 'preprint',
    citations: 0,
    topic: 'linear',
    scholarLink:
      'https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=tMihzcoAAAAJ&citation_for_view=tMihzcoAAAAJ:W7OEmFMy1HYC',
    arxivLink: 'https://arxiv.org/abs/2609.28399',
  },
  {
    year: 2026,
    title: 'Normalized Low-Rank Adaptation',
    authors: 'J Kang, Z Yue, Z Zhan, Y Huang, W Liu',
    id: 'nora',
    date: '2026-08',
    venue: 'arXiv:2608.31036',
    venueType: 'preprint',
    citations: 0,
    topic: 'peft',
    scholarLink:
      'https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=tMihzcoAAAAJ&citation_for_view=tMihzcoAAAAJ:Y0pCki6q_DkC',
    arxivLink: 'https://arxiv.org/abs/2608.31036',
  },
  {
    year: 2026,
    title: 'DepthBench: Measuring How Residual Connections Enable More Computational Depth',
    authors: 'K Wang, Y Huang, J Kang, D González-Martínez, W Liu, S Liu',
    id: 'depthbench',
    date: '2026-09',
    venue: 'arXiv:2609.32534',
    venueType: 'preprint',
    citations: 0,
    topic: 'arch',
    scholarLink:
      'https://scholar.google.com/scholar?q=DepthBench%3A+Measuring+How+Residual+Connections+Enable+More+Computational+Depth',
    arxivLink: 'https://arxiv.org/abs/2609.32534',
  },
]

export const topicLabels: Record<Publication['topic'], string> = {
  peft: '参数高效微调',
  linear: '线性时间建模',
  multimodal: '多模态感知',
  arch: '架构与深度扩展',
}
