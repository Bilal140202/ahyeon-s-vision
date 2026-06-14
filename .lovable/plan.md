# Ahyeon Site — 2026 Update Plan (verified through Jun 14, 2026)

## Important fact-checks first

- **No verified solo music-show trophy win** for Ahyeon as of Jun 14, 2026 — she has not debuted solo. I will NOT add a "first solo trophy" claim. Instead I'll feature her real 2026 solo accolade: **KGMA Solo Female Artist of April #1** (33,380 votes).
- **CHOOM** and **SUGAR HONEY ICE TEA** are BABYMONSTER group releases — framed as group comebacks featuring Ahyeon, not solo releases.

---

## 1. New section: "2026 Timeline" (replaces / augments existing highlights)

Cinematic vertical timeline on the homepage with dated cards:


| Date    | Card                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------- |
| Jan 2–3 | LOVE MONSTERS Taipei finale — first KPop act at Taipei Arena 2026; 24K fans; Ahyeon speaks Chinese on stage |
| Mar 4   | Vogue Hong Kong March 2026 cover (group)                                                                    |
| Mar 26  | Vogue × GQ event, Hong Kong                                                                                 |
| Apr 11  | Ahyeon's 19th birthday (Korean age 20)                                                                      |
| Apr 13  | **KGMA Solo Female Artist of April #1** (33,380 votes)                                                      |
| Apr 17  | SHEESH hits 400M views — fastest K-pop girl group debut song to 400M                                        |
| May 4   | **CHOOM** 3rd mini album release (149M+ MV views)                                                           |
| May 9   | First CHOOM stage — viral hand-mic live performance                                                         |
| May 19  | BANILA CO brand event, Seongsu-dong                                                                         |
| Jun 7   | **SUGAR HONEY ICE TEA** MV release                                                                          |
| Jun 8   | 10M YouTube views in under 12 hours                                                                         |
| Jun 10  | #1 Global YouTube Music Chart                                                                               |
| Jun 12  | "Summer Queen" — first SHIT music-show stages                                                               |


## 2. New section: "Upcoming — CHOOM World Tour 2026–27"

Grid of tour-date cards (verified from YG Family + Wikipedia):

- Seoul (Jun 26–28), Kobe (Jul 8–9), Fukuoka, Yokohama, Chiba, Nagoya, Manila, Macao
- **⭐ Osaka Kyocera Dome (Sep 22–23) — first solo dome concerts**
- Jakarta, Bangkok, KL, Taipei, Singapore, Auckland, Melbourne, Sydney, Hong Kong (Jan 2027)
- "North America / Europe / South America — TBA 2027" placeholder card

## 3. Refresh video embeds (replace older ones)

- Add `CHOOM` MV (`x3eqqoZPV_E`)
- Add `SUGAR HONEY ICE TEA` MV (`naoGk-Zjc1s`)
- Add `SUGAR HONEY ICE TEA` Performance Video (`SsuCimm5BIU`)
- Keep existing Ahyeon "Dangerous" cover + SHEESH MV

## 4. Refresh existing highlights

- Update "Chinese power influence" block with Taipei Arena Chinese-on-stage moment + JD.com China fan sign (Jun 20)
- Update "It Girl" block with Vogue HK cover + Vogue×GQ HK + BANILA CO
- Update "Powerful covers" block to note KGMA #1 win (alongside Golden cover)
- Add stat badges: `149M+ CHOOM views`, `400M SHEESH`, `#1 Global YT Chart`

## 5. Expand gallery (locally hosted per existing convention)

Download → `src/assets/ahyeon/2026/`:

- CHOOM teaser/visual (1–2 images)
- SUGAR HONEY ICE TEA teaser (Ahyeon solo teaser photo)
- BANILA CO event photo
- Vogue×GQ HK event photo
- Music Core / Inkigayo CHOOM fancam stills
- Birthday official art (Apr 11)
- Gimpo airport May 28/31

(~8 new images, all downloaded + imported as ES6 imports, matching the existing pattern)

## 6. SEO / meta refresh

- Update meta description + OG description to mention 2026 CHOOM / SHIT / CHOOM World Tour
- Update `README.md` "Latest" section with the new timeline anchor

---

## Technical notes

- All new sections added to `src/pages/Index.tsx`
- Timeline + Tours built with existing shadcn `Card` + Tailwind tokens (no new deps)
- New images go in `src/assets/ahyeon/2026/` to keep folder clean
- No backend / Cloud needed — pure static content update
- Build verified before completion

Also deep analysis on current data that is on the site already like view counts like counts as well as age etc