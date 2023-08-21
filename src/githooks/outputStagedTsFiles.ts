import { simpleGit } from "npm:simple-git";
import { writeAllSync } from "../../src/deps.ts";

const git = simpleGit({ baseDir: "." });
const s = await git.status();
const stagedFiles = s.staged;
// TODO: should be able to base below extension on argument to this file
const tsFiles = stagedFiles.filter((f) => f.endsWith(".ts"));
const stagedFilesAsString = tsFiles.join(" ");
const contentBytes = new TextEncoder().encode(stagedFilesAsString);
writeAllSync(Deno.stdout, contentBytes);
