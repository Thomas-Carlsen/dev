import { parse } from "../deps.ts";
import { findCommand, showHelp } from "./createCommand.ts";

export function runCommand({
  commandName,
  args,
}: {
  commandName: string;
  args: string[];
}) {
  const parsedArgs = parse(args);
  if (args.length > 0) {
    const command = findCommand(args[0]);
    if (!command) {
      if (parsedArgs.h || parsedArgs.help) {
        showHelp({ commandName });
        Deno.exit(0);
      }
      console.warn(`'${args[0]}' is not a valid command`);
      showHelp({ commandName });
      Deno.exit(1);
    }
    command.runCommand(args.slice(1));
  }
}
