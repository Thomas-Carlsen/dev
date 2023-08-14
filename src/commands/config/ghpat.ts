import { Config } from "../../services/config/Config.ts";
import { createCommand } from "../../utils/createCommand.ts";

createCommand({
  name: "ghpat",
  description: "Show or store Github PAT",
  parentCommand: "config",
  runCommand: run,
  filePath: import.meta.url,
});

async function run(args: string[]) {
  console.log(args);
  // config properties should be typed generated
  console.log(Config.Github.pat);
}
