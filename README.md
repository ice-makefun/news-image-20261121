# Saturday 21 November 2026 Front Page

[![news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/ice-makefun/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/ice-makefun/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

One image that sums up the world's news of Saturday 21 November 2026, drawn
as a newspaper front page. The program copies the finished image to the
output directory; run it twice and both runs write the same bytes.

## The day's stories

1. **Ukraine** — Russia's overnight barrage: 3 ballistic missiles and 148
   drones, 117 downed, strikes at 19 sites; fires in Kyiv's Podil.
2. **Markets** — AI rout sinks Wall Street: Nasdaq −5.3%, S&P 500 −3.7%,
   Dow −1.9%; Nvidia falls 14%.
3. **Science** — Riemann hypothesis proof independently verified: Lean and
   Mathlib back Alpöge's 17m-line proof; Clay still lists it unsolved.
4. **Climate** — COP31 deadlocks in overtime in Antalya; the draft drops the
   fossil-fuel exit and the $120bn-a-year adaptation goal.
5. **Disaster** — M6.8 quake in the Banda Sea off Timor-Leste, 09:42 UTC;
   BMKG revises its reading to M6.9. No tsunami, no casualties.

Around the world: drones hit the Russian cargo ship Sparta II; an Israeli
strike kills 3 in a food-aid vehicle in Gaza; 3 Houthi missiles aimed at
Riyadh are intercepted; Boca Juniors win the Copa Sudamericana 2–0; the FBI
probes an apparent hack of its NCIC database; a $7.25bn Roundup settlement
wins final approval.

## How it is made

`work/compose.py` draws `frontpage.png` (1024×1024, under 1 MiB) with PIL
and the system DejaVu fonts — every pixel is drawn programmatically, no
photograph or downloaded image. `main.ts` (Node 22) copies that file to
`$MAKEFUN_OUTPUT_DIR/entry.png`.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
