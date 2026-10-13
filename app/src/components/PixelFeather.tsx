const P = 3
const COLS = 20
const ROWS = 30

type R = [x: number, y: number, w: number, c: string]

/**
 * Hand-crafted pixel feather — 20×30 grid.
 * Dark outline; solid deep-blue vane below the rachis, light-blue vane
 * above; a shade column and a highlight column hugging the rachis for
 * depth; tiny notches on the vane edges; bare quill at the bottom-left.
 */
const feather: R[] = [
  [16, 0, 2, '#0f3b83'],
  [15, 1, 2, '#0f3b83'],
  [17, 1, 1, '#c2e0ff'],
  [18, 1, 1, '#0f3b83'],
  [13, 2, 1, '#0f3b83'],
  [14, 2, 1, '#0066cc'],
  [15, 2, 1, '#0f3b83'],
  [16, 2, 1, '#eaf5ff'],
  [17, 2, 1, '#0f3b83'],
  [13, 3, 1, '#0f3b83'],
  [14, 3, 1, '#0066cc'],
  [15, 3, 1, '#0f3b83'],
  [16, 3, 1, '#eaf5ff'],
  [17, 3, 1, '#7fc3ff'],
  [18, 3, 1, '#0f3b83'],
  [11, 4, 1, '#0f3b83'],
  [12, 4, 1, '#0081fb'],
  [13, 4, 1, '#0066cc'],
  [14, 4, 1, '#0f3b83'],
  [15, 4, 1, '#c2e0ff'],
  [16, 4, 1, '#7fc3ff'],
  [17, 4, 1, '#0f3b83'],
  [11, 5, 1, '#0f3b83'],
  [12, 5, 1, '#0081fb'],
  [13, 5, 1, '#0066cc'],
  [14, 5, 1, '#0f3b83'],
  [15, 5, 1, '#c2e0ff'],
  [16, 5, 2, '#7fc3ff'],
  [18, 5, 1, '#0f3b83'],
  [9, 6, 1, '#0f3b83'],
  [10, 6, 2, '#0081fb'],
  [12, 6, 1, '#0066cc'],
  [13, 6, 1, '#0f3b83'],
  [14, 6, 1, '#c2e0ff'],
  [15, 6, 2, '#7fc3ff'],
  [17, 6, 1, '#0f3b83'],
  [9, 7, 1, '#0f3b83'],
  [10, 7, 2, '#0081fb'],
  [12, 7, 1, '#0066cc'],
  [13, 7, 1, '#0f3b83'],
  [14, 7, 1, '#c2e0ff'],
  [15, 7, 2, '#7fc3ff'],
  [17, 7, 1, '#0f3b83'],
  [7, 8, 1, '#0f3b83'],
  [8, 8, 3, '#0081fb'],
  [11, 8, 1, '#0066cc'],
  [12, 8, 1, '#0f3b83'],
  [13, 8, 1, '#c2e0ff'],
  [14, 8, 2, '#7fc3ff'],
  [16, 8, 1, '#0f3b83'],
  [8, 9, 1, '#0f3b83'],
  [9, 9, 2, '#0081fb'],
  [11, 9, 1, '#0066cc'],
  [12, 9, 1, '#0f3b83'],
  [13, 9, 1, '#c2e0ff'],
  [14, 9, 2, '#7fc3ff'],
  [16, 9, 1, '#0f3b83'],
  [6, 10, 1, '#0f3b83'],
  [7, 10, 3, '#0081fb'],
  [10, 10, 1, '#0066cc'],
  [11, 10, 1, '#0f3b83'],
  [12, 10, 1, '#c2e0ff'],
  [13, 10, 2, '#7fc3ff'],
  [15, 10, 1, '#0f3b83'],
  [6, 11, 1, '#0f3b83'],
  [7, 11, 3, '#0081fb'],
  [10, 11, 1, '#0066cc'],
  [11, 11, 1, '#0f3b83'],
  [12, 11, 1, '#c2e0ff'],
  [13, 11, 2, '#7fc3ff'],
  [15, 11, 1, '#0f3b83'],
  [5, 12, 1, '#0f3b83'],
  [6, 12, 3, '#0081fb'],
  [9, 12, 1, '#0066cc'],
  [10, 12, 1, '#0f3b83'],
  [11, 12, 1, '#c2e0ff'],
  [12, 12, 2, '#7fc3ff'],
  [14, 12, 1, '#0f3b83'],
  [6, 13, 1, '#0f3b83'],
  [7, 13, 2, '#0081fb'],
  [9, 13, 1, '#0066cc'],
  [10, 13, 1, '#0f3b83'],
  [11, 13, 1, '#c2e0ff'],
  [12, 13, 1, '#7fc3ff'],
  [13, 13, 1, '#0f3b83'],
  [5, 14, 1, '#0f3b83'],
  [6, 14, 2, '#0081fb'],
  [8, 14, 1, '#0066cc'],
  [9, 14, 1, '#0f3b83'],
  [10, 14, 1, '#c2e0ff'],
  [11, 14, 1, '#0f3b83'],
  [5, 15, 1, '#0f3b83'],
  [6, 15, 2, '#0081fb'],
  [8, 15, 1, '#0066cc'],
  [9, 15, 1, '#0f3b83'],
  [10, 15, 1, '#c2e0ff'],
  [11, 15, 1, '#7fc3ff'],
  [12, 15, 1, '#0f3b83'],
  [5, 16, 1, '#0f3b83'],
  [6, 16, 1, '#0081fb'],
  [7, 16, 1, '#0066cc'],
  [8, 16, 1, '#0f3b83'],
  [9, 16, 1, '#c2e0ff'],
  [10, 16, 1, '#7fc3ff'],
  [11, 16, 1, '#0f3b83'],
  [5, 17, 1, '#0f3b83'],
  [6, 17, 1, '#0081fb'],
  [7, 17, 1, '#0066cc'],
  [8, 17, 1, '#0f3b83'],
  [9, 17, 1, '#c2e0ff'],
  [10, 17, 1, '#0f3b83'],
  [4, 18, 1, '#0f3b83'],
  [5, 18, 1, '#0081fb'],
  [6, 18, 1, '#0066cc'],
  [7, 18, 1, '#0f3b83'],
  [8, 18, 1, '#c2e0ff'],
  [9, 18, 1, '#0f3b83'],
  [6, 19, 3, '#0f3b83'],
  [5, 20, 3, '#0f3b83'],
  [5, 21, 2, '#0f3b83'],
  [5, 22, 1, '#0f3b83'],
  [5, 23, 1, '#0f3b83'],
  [4, 24, 1, '#0f3b83'],
  [3, 25, 1, '#55afff'],
  [3, 26, 1, '#55afff'],
  [2, 27, 1, '#55afff'],
  [2, 28, 1, '#0f3b83'],
]

// twinkling sparkles (plus-shaped, 2 rects each), staggered blink
const SPARK = '#9fd0ff'
const sparkles: { x: number; y: number; delay: number }[] = [
  { x: 17, y: 8, delay: 0 },
  { x: 15, y: 15, delay: 0.9 },
  { x: 8, y: 26, delay: 1.7 },
]

// expand run-length rows into individual pixels so each can pulse on its own
const pixels: { x: number; y: number; c: string }[] = []
for (const [x, y, w, c] of feather) {
  for (let i = 0; i < w; i++) pixels.push({ x: x + i, y, c })
}

export default function PixelFeather({
  size = 96,
  className = '',
  animClass = '',
}: {
  size?: number
  className?: string
  animClass?: string
}) {
  return (
    <svg
      width={size}
      height={(size * ROWS) / COLS}
      viewBox={`0 0 ${COLS * P} ${ROWS * P}`}
      className={`pixelated ${animClass} ${className}`}
      role="img"
      aria-label="pixel feather"
    >
      {pixels.map(({ x, y, c }, i) => (
        <rect
          key={i}
          className="pixel-wave"
          style={{ animationDelay: `${(y * 0.085 + x * 0.018).toFixed(3)}s` }}
          x={x * P}
          y={y * P}
          width={P}
          height={P}
          fill={c}
        />
      ))}
      {sparkles.map((s, i) => (
        <g key={`sp${i}`} className="twinkle" style={{ animationDelay: `${s.delay}s` }}>
          <rect x={(s.x + 1) * P} y={s.y * P} width={P} height={3 * P} fill={SPARK} />
          <rect x={s.x * P} y={(s.y + 1) * P} width={3 * P} height={P} fill={SPARK} />
        </g>
      ))}
    </svg>
  )
}
