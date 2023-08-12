import "./src/importCommands.ts";
import { createCommand, showHelp } from "./src/utils/createCommand.ts";

if (import.meta.main) {
  runMain();
}

function runMain() {
  const { args } = Deno;
  console.log(args)
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
