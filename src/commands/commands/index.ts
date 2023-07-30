import { parse } from "../../deps.ts";
import { Command as C } from "../../models/Command.ts";
import { createCommand, showHelp } from "../../utils/createCommand.ts";
import { _help } from "../../utils/help.ts";
import { runCommand } from "../../utils/runCommand.ts";

export function runCommands(args: string[]) {
  console.log();
  console.log("commands");
  _help({
    usage: `Usage: dev commands [COMMAND]`,
    commands: [["create", "ew"]],
    commandsPadEnd: 30,
  });
}

const commandsCommand: C = {
  name: "commands",
  description: "Collection of utils to create and update cli commands",
  runCommand: run,
};

// create/make or register commmand - creating is actually above
// Function Attempt
createCommand(commandsCommand);

function run() {
  console.log("yoo");
}

// Class Attempt
// class Command {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Commandor extends Command {}
