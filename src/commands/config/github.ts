import { parse } from "../../deps.ts";
import { Config } from "../../services/config/Config.ts";
import { createCommand } from "../../utils/createCommand.ts";

createCommand({
  name: "gh",
  description: "Show or store Github PAT",
  parentCommand: "config",
  runCommand: run,
  filePath: import.meta.url,
});

async function run(args: string[]) {
  const parsedArgs = parse(args);
  if (parsedArgs.pat === true) {
    // config properties should be typed generated
    console.log(Config.Github.pat());
  } else if (parsedArgs.pat) {
    Config.Github.storePat(parsedArgs.pat);
  } else {
    Config.Github.print();
  }
}
