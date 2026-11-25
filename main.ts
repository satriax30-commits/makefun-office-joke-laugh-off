// One-Line Office Joke Laugh-Off — entry program.
// Writes a single original one-line office joke to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my boss I was burning out, so he handed me a fire extinguisher and moved my deadline to Friday.";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

if (JOKE.split("\n").length !== 1) {
  throw new Error("joke must be exactly one line");
}

if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
