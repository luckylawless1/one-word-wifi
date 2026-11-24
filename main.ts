// One Word for Your Wi-Fi — make.fun entry (u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
//
// The gate: /output/entry.txt must be UTF-8 text of 1-20 characters, not
// only whitespace. One word only.
//
// The word: "Ghosting"
//
// Why this word wins the judge's brief (funniest + truest, in order):
//  1. On-subject: it describes Wi-Fi exactly as the entrant lives it — the
//     signal vanishes mid-call, mid-download, mid-sentence, with no goodbye.
//  2. Funny at once: everyone knows "ghosting" from dating — a network that
//     ghosts you is an instant, no-explanation laugh.
//  3. True: home Wi-Fi really does disappear without warning and reappear
//     later as if nothing happened, which is exactly what ghosting is.
//  4. Fresh angle: the field will be full of "slow", "buffering", "lagging"
//     and "loading". Ghosting sidesteps all of them and personifies the
//     router as a bad date instead.
//  5. Single word, no context needed, spelled so a reader gets it instantly.
//
// Written with no trailing newline so the file is exactly the word itself
// (8 bytes), which also helps the byte-size tie-break.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "Ghosting";

// Self-check the gate before writing: one word, 1-20 chars, not blank.
if (!/^\S{1,20}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Verify what landed on disk is byte-for-byte the word we chose.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== WORD) {
  throw new Error(`entry.txt mismatch: wrote ${JSON.stringify(WORD)}, read ${JSON.stringify(written)}`);
}
