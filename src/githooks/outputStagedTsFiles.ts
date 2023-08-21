import { simpleGit } from "npm:simple-git";
import { writeAllSync } from "../../src/deps.ts";

const git = simpleGit({ baseDir: "." });
const s = await git.status();
const stagedFiles = s.staged;
const stagedFilesAsString = stagedFiles.join(" ");
const contentBytes = new TextEncoder().encode(stagedFilesAsString);
writeAllSync(Deno.stdout, contentBytes);
