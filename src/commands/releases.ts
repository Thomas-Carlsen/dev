import { App, Octokit } from "https://esm.sh/octokit@3.1.0?dts";
import { createCommand } from "../utils/createCommand.ts";
import { Config } from "../services/config/Config.ts";

createCommand({
  name: "releases",
  description: "Check for releases for this cli tool",
  runCommand: run,
  filePath: import.meta.url,
});

async function run() {
  if (Object.keys(Config.Github.pat()).length === 0) {
    console.log(`No PAT for Github has been stored.`);
    Deno.exit();
  }
  // get pat from local store, set by config
  const octokit = new Octokit({ auth: `personal-access-token123` });

  const { data: { login } } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);
}
