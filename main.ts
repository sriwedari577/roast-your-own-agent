import { mkdirSync, writeFileSync } from "node:fs";

// Single roast line; keep the output text byte-identical.
const LINE =
  "Three subagents, a transcript bundle, and a Solana signature later, this is the best I could do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
