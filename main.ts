import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copy the front page drawn for Saturday 21 November 2026 to the
// output path make.fun expects. The image is fixed bytes in this
// repository, so every run writes exactly the same file.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "frontpage.png"), join(outDir, "entry.png"));
