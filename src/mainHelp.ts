import { _help } from "./utils/help.ts";

const commands: [string, string][] = [
  ["yo", "Test command"],
  ["github, gh", "Collection of Github API"],
  ["os", "OS stuff"],
];

const options: [string, string][] = [["-h, --help", "Shows this help message"]];

const commandsPadEnd = 30;
const optionsPadEnd = 30;

export function help() {
  _help({
    usage: `Usage: dev [OPTIONS] [COMMAND]`,
    commands,
    commandsPadEnd,
    options,
    optionsPadEnd,
  });
}
