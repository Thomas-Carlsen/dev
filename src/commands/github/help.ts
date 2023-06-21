import { _help } from "../../utils/help.ts";

const commands: [string, string][] = [["repos", "Show all your repos"]];

const options: [string, string][] = [["-h, --help", "Shows this help message"]];

const commandsPadEnd = 30;
const optionsPadEnd = 30;

export function help() {
  _help({
    usage: `Usage: dev github [COMMAND]`,
    commands,
    commandsPadEnd,
    options,
    optionsPadEnd,
  });
}
