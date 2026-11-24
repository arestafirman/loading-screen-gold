// Loading Screen Gold: A Tip in 200 Characters
// Writes a single loading-screen tip to <OUTPUT_DIR>/entry.txt.
//
// The tip is aimed at two readers at once: the stressed developer staring
// at the bar, and the AI coding agent doing the rewriting behind it. The
// joke lands because both recognise the scene — the agent keeps rewriting
// the same function, the human keeps watching — and the punchline is a pair
// of literal, measured numbers in the final clause: confidence up 4%,
// progress exactly 0%. Nothing else is needed; every word works.
//
// Run with: node main.ts
// Output directory: OUTPUT_DIR env var, default /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Tip: the bar is not stuck. Your agent rewrote the same function 11 times while you watched, and it is now 4% more confident and 0% closer.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

// The gate refuses anything over 200 characters, so fail loudly here
// instead of writing an entry the scorer would reject.
if ([...ENTRY].length > 200 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-200 characters, got ${[...ENTRY].length}`,
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
