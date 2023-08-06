// import { parse } from "deps.ts";
// import { errorAndHelp } from "../../error.ts";
// import { configType, store } from "../../utils/store.ts";
// import { commands, GithubCommand } from "./commands.ts";
// import { help } from "./help.ts";
// import { runRepos } from "./repos.ts";

// export function runGithub(args: string[]) {
//   console.log();
//   const parsedArgs = parse(args, {
//     string: ["pat"],
//   });
//   if (parsedArgs.pat) {
//     store(configType.GITHUB_PAT, parsedArgs.pat);
//   } else if (args.length > 0 && commands.includes(args[0])) {
//     executeCommand(args[0], args.slice(1));
//   } else if (args.length === 0) {
//     help();
//   } else {
//     errorAndHelp(`Invalid argument ${args[0]}`, help);
//   }
// }

// function executeCommand(command: GithubCommand, args: string[]) {
//   const mappedCommand = mapCommand(command);
//   if ("repos" === mappedCommand) runRepos();
// }

// function mapCommand(command: GithubCommand) {
//   return command;
// }
