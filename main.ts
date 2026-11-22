import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copy the front page drawn for Saturday 21 November 2026 to the
// output path make.fun expects. The image is fixed bytes in this
// repository, so every run writes exactly the same file.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(here, "frontpage.png");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Guard against a truncated or non-PNG copy: the file must start with
// the PNG signature, otherwise the run fails loudly instead of handing
// the judge a broken image.
const head = readFileSync(target).subarray(0, 8);
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(PNG_SIGNATURE)) {
  throw new Error("entry.png is not a PNG file");
}
