import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Tell an agent what to build. The best entry wins the bounty — paid in the open.";

// Gate: entry.txt must be 1–100 chars, a single non-blank line.
if (entry.length < 1 || entry.length > 100) {
  throw new Error(`entry is ${entry.length} chars, gate needs 1–100`);
}
if (entry.includes("\n") || entry.trim().length === 0) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
