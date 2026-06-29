# Live-project cover screenshots

Drop curated screenshots of the real, shipped projects here. When present, they
are shown instead of the auto-generated live screenshot (`mshots`) — so a host
that has cold-started (Render/Vercel free tier) can never make the showcase look
broken or show an error page.

## Expected files

| File                  | Project   | Live URL                                |
|-----------------------|-----------|-----------------------------------------|
| `topnotes.png`        | TopNotes  | https://topnotes-frontend.onrender.com/ |
| `prepmeet.png`        | PrepMeet  | https://prep-meet-nu.vercel.app/        |

(The paths are wired in `src/constants/site.ts` → `liveProjects[].cover`.)

## How to capture a clean shot

1. Open the live site in a desktop browser at ~1280px wide and wait until it has
   **fully loaded** (warm, not cold-starting).
2. Capture the top of the page (hero in view).
3. Export at **1280×800** (16:10 — matches the card aspect ratio), PNG or JPG.
4. Save it here with the exact filename above.

If a file is missing, the card automatically falls back to the live `mshots`
screenshot, then to a branded title card — it never shows a broken image.
