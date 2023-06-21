import { Command, commands } from "./commands.ts";
import { runGithub } from "./src/commands/github/main.ts";
import { runYo } from "./src/commands/yo/main.ts";
import { bold, green, italic, parse } from "./src/deps.ts";
import { errorAndHelp } from "./src/error.ts";
import { help } from "./src/mainHelp.ts";

if (import.meta.main) {
  const { args } = Deno;
  const parsedArgs = parse(args);
  displayDevCli();
  if (args.length === 0 || parsedArgs.h || parsedArgs.help) {
    help();
  } else if (commands.includes(args[0])) {
    executeCommand(args[0]);
  } else {
    errorAndHelp(`Invalid argument ${args[0]}`);
  }
}

function displayDevCli(): void {
  console.log();
  console.log(bold("---------------------------"));
  console.log(green(italic(bold(`          dev-cli`))));
  console.log(bold("---------------------------"));
  console.log();
}

function executeCommand(command: Command) {
  const mappedCommand = mapCommand(command);
  if ("yo" === mappedCommand) runYo();
  if ("github" === mappedCommand) runGithub();
}

function mapCommand(command: Command) {
  if (command === "gh") return "github";
  return command;
}
