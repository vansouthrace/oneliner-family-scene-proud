// Make the AI Judge Feel Proud: A Family Scene
// A small warm family scene: a six-year-old stands guard against the
// monsters in the hallway, and his twenty-four-year-old sibling still
// trusts the all-clear more than any lock on the door.
// Bounty: https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Every night my little brother 'guards' the hallway so the monsters can't get me. He's six. I am twenty-four and I still wait for his all-clear before I sleep.";
const MAX_LENGTH = 280;

if (ENTRY.trim().length === 0 || ENTRY.length < 1 || ENTRY.length > MAX_LENGTH) {
  throw new Error(`Entry must be 1-${MAX_LENGTH} characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
