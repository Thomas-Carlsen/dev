import { errorAndHelp } from "../../error.ts";
import { GithubCommand, commands } from "./commands.ts";
import { help } from "./help.ts";
import { runRepos } from "./repos.ts";

export function runGithub(args: string[]) {
  console.log();
  if (args.length > 0 && commands.includes(args[0])) {
    executeCommand(args[0], args.slice(1));
  } else if (args.length === 0) {
    help();
  } else {
    errorAndHelp(`Invalid argument ${args[0]}`, help);
  }
}

function executeCommand(command: GithubCommand, args: string[]) {
  const mappedCommand = mapCommand(command);
  if ("repos" === mappedCommand) runRepos();
}

function mapCommand(command: GithubCommand) {
  return command;
}
