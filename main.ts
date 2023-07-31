import { type Command } from "./commands.ts";
// import { runCommands } from "./src/commands/commands/main.ts";
import { runGithub } from "./src/commands/github/main.ts";
import "./src/importCommands.ts";
import { runOs } from "./src/commands/os/main.ts";
import { runYo } from "./src/commands/yo/main.ts";
import { bold, green, italic, parse } from "./src/deps.ts";
import {
  createCommand,
  findCommand,
  showHelp,
} from "./src/utils/createCommand.ts";
import { runCommand } from "./src/utils/runCommand.ts";

if (import.meta.main) {
  newAttempt();
  // Below is old attempt
  // const { args } = Deno;
  // const parsedArgs = parse(args);
  // if (args.length > 0 && commands.includes(args[0])) {
  //   executeCommand(args[0], args.slice(1));
  // } else if (args.length === 0 || parsedArgs.h || parsedArgs.help) {
  //   displayDevCli();
  //   help();
  // } else {
  //   displayDevCli();
  //   errorAndHelp(`Invalid argument ${args[0]}`, help);
  // }
}

function newAttempt() {
  const { args } = Deno;
  const mainCommand = createCommand({
    name: "main",
    description:
      "The dev-cli is made to make life easier - please enjoy life more! ;p",
    runCommand: () => {
      showHelp({ commandName: "main" });
    },
    filePath: import.meta.url,
  });
  mainCommand.runCommand(args);
  // runCommand({ commandName: "main", args });
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
  // if ("commands" === mappedCommand) runCommands(args);
  if ("yo" === mappedCommand) runYo();
  if ("github" === mappedCommand) runGithub(args);
  if ("os" === mappedCommand) runOs(args);
}

function mapCommand(command: Command) {
  if (command === "gh") return "github";
  return command;
}
