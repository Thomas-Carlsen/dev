import { bold } from "./deps.ts";

const commandsPadEnd = 30;
const optionsPadEnd = 30;

export function help() {
  console.log(`Usage: dev [OPTIONS] [COMMAND]`);

  console.log(`\nCommands:`);
  console.log(`  ${bold("yo")}`.padEnd(commandsPadEnd) + `Test command`);
  console.log(
    `  ${bold("github, gh")}`.padEnd(commandsPadEnd) +
      `Collection of Github API`
  );

  console.log(`\nOptions:`);
  console.log(
    `  ${bold("-h, --help")}`.padEnd(optionsPadEnd) + `Shows this help message`
  );

  Deno.exit();
}
