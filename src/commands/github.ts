import { configType, store } from "../utils/store.ts";
import { parse } from "../deps.ts";
import { createCommand } from "../utils/createCommand.ts";
import { Config } from "../services/config/Config.ts";

createCommand({
  name: "github",
  description: "Collection of GitHub commands",
  runCommand: run,
  filePath: import.meta.url,
});

async function run() {
  // console.log();
  // const parsedArgs = parse(Deno.args, {
  //   string: ["pat"],
  // });
  // if (parsedArgs.pat) {
  //   store(configType.GITHUB_PAT, parsedArgs.pat);
  // }
}
