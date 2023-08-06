import { Command } from "../models/Command.ts";
import { bold, green, italic, parse } from "../deps.ts";

const allCommands: Command[] = [];
export function createCommand(command: Command): Command {
  command.parentCommand ??= command.name === "main" ? undefined : "main";
  const originalRunCommand = command.runCommand;
  command.runCommand = (args: string[]) => {
    const parsedArgs = parse(args);
    if (args.length > 0) {
      const subCommand = findCommand(args[0]);
      if (subCommand) {
        subCommand.runCommand(args.slice(1));
        Deno.exit();
      }

      if (parsedArgs.h || parsedArgs.help) {
        showHelp({ commandName: command.name });
        Deno.exit(0);
      } else {
        console.warn(`'${args[0]}' is not a valid command`);
        showHelp({ commandName: command.name });
      }
    } else {
      originalRunCommand(args);
    }
  };
  allCommands.push(command);
  return command;
}

export function showCommands() {
  for (const command of allCommands) {
    console.log(command.name);
  }
}

type ShowHelpOptions = {
  commandName: string; // could we make a union of all commands?
};

export function showHelp({ commandName }: ShowHelpOptions) {
  if (commandName === "main") displayDevCli();
  const command = findCommand(commandName)!;
  const commandPath = commandName === "main" ? "" : findCommandPath(command, command?.name) + " ";
  const childCommands = findChildCommands(commandName);

  if (childCommands.length === 0) {
    console.log();
    console.log(`Command: ${bold(commandName)}`);
    // TODO: add flags and examples
    console.log(`\n${bold("Description:")}`);
    console.log(`  ${command?.description}`);
    console.log(`\n${bold("Flags:")}`);
    console.log(`\n${bold("Examples:")}`);
    console.log();
    Deno.exit();
  }

  console.log(`\n${bold("Description:")}`);
  console.log(`  ${command?.description}`);

  console.log(`\n${bold("Usage:")}`);
  console.log(`  dev ${commandPath}[COMMAND]`);

  console.log(`\n${bold("Commands:")}`);
  printCommands(childCommands, command?.commandsPadEnd);
  console.log();
}

export function findCommand(commandName: string): Command | undefined {
  return allCommands.find((c) => c.name === commandName);
}

function findCommandPath(command: Command, pathSoFar: string): string {
  // TODO: refactor to not use ! below
  const parentCommand = command.parentCommand!;
  if (parentCommand === "main") return pathSoFar;
  return findCommandPath(
    findCommand(parentCommand)!,
    parentCommand + " " + command.name,
  );
}

function findChildCommands(commandName: string) {
  return allCommands.filter((c) => c.parentCommand === commandName);
}

function printCommands(commands: Command[], commandsPadEnd = 30) {
  for (const { name, description } of commands) {
    console.log(`  ${bold(name)}`.padEnd(commandsPadEnd) + description);
  }
}

function displayDevCli(): void {
  console.log();
  console.log(bold("---------------------------"));
  console.log(green(italic(bold(`          dev-cli`))));
  console.log(bold("---------------------------"));
}
