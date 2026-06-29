# Brand assets

Drop these two image files here (exact names) — the site auto-wires them via
`src/app/layout.tsx` metadata:

| File | What | Recommended size |
|------|------|------------------|
| `logo.png` | Circular THEA21 logo → favicon / tab icon / app icon | square, 512×512 or larger |
| `banner.png` | Wide marketing banner → social share (Open Graph / Twitter) preview | 1200 × 630 |

Notes:
- `banner.png` ideally 1200×630 (1.91:1). The original cover is wider (~1600×650),
  so export/pad a 1200×630 version or the bottom contact strip may get cropped.
- After adding/replacing these, hard-refresh the browser (Ctrl+Shift+R) to bust
  the favicon cache.
