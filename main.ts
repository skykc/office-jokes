// office-jokes: writes one office joke to /output/entry.txt.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I fixed reply-all by deleting the whole company directory - now nobody can email anyone, and morale has never been higher.";

// The gate only accepts 1-199 characters; refuse to write anything else.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`joke must be 1-199 characters, got ${JOKE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
