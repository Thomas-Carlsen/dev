import "./src/importCommands.ts";
import { createCommand, showHelp } from "./src/utils/createCommand.ts";

if (import.meta.main) {
  newAttempt();
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
}
