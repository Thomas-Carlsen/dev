import { parse } from "../deps.ts";
import { createCommand } from "../../src/utils/createCommand.ts";

createCommand({
  name: "version",
  description: "Shows the installed release",
  runCommand: run,
  filePath: import.meta.url,
});

function run() {
  const parsedArgs = parse(Deno.args, {
    string: ["version"],
  });
  console.log(`Current version is '${parsedArgs.version}'`);
}
