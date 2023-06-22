import { Command, commands } from "./commands.ts";
import { runGithub } from "./src/commands/github/main.ts";
import { runYo } from "./src/commands/yo/main.ts";
import { bold, green, italic, parse } from "./src/deps.ts";
import { errorAndHelp } from "./src/error.ts";
import { help } from "./src/mainHelp.ts";

if (import.meta.main) {
  const { args } = Deno;
  const parsedArgs = parse(args);
  if (args.length > 0 && commands.includes(args[0])) {
    executeCommand(args[0], args.slice(1));
  } else if (args.length === 0 || parsedArgs.h || parsedArgs.help) {
    displayDevCli();
    help();
  } else {
    displayDevCli();
    errorAndHelp(`Invalid argument ${args[0]}`, help);
  }
}

function displayDevCli(): void {
  console.log();
  console.log(bold("---------------------------"));
  console.log(green(italic(bold(`          dev-cli`))));
  console.log(bold("---------------------------"));
  console.log();
}

function executeCommand(command: Command, args: string[]) {
  const mappedCommand = mapCommand(command);
  if ("yo" === mappedCommand) runYo();
  if ("github" === mappedCommand) runGithub(args);
}

function mapCommand(command: Command) {
  if (command === "gh") return "github";
  return command;
}
