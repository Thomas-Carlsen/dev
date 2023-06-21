import { bold } from "../deps.ts";

interface IHelp {
  usage: string;
  commands: [string, string][];
  commandsPadEnd: number;
  options: [string, string][];
  optionsPadEnd: number;
}

export function _help({
  usage,
  commands,
  commandsPadEnd,
  options,
  optionsPadEnd,
}: IHelp) {
  console.log(usage);

  console.log(`\nCommands:`);
  printCommands(commands, commandsPadEnd);

  console.log(`\nOptions:`);
  printOptions(options, optionsPadEnd);
}

function printCommands(commands: [string, string][], commandsPadEnd: number) {
  for (const [commandName, commandDescription] of commands) {
    console.log(
      `  ${bold(commandName)}`.padEnd(commandsPadEnd) + commandDescription
    );
  }
}

function printOptions(options: [string, string][], optionsPadEnd: number) {
  for (const [optionName, optionDescription] of options) {
    console.log(
      `  ${bold(optionName)}`.padEnd(optionsPadEnd) + optionDescription
    );
  }
}
