import "./src/importCommands.ts";
import { createCommand, showHelp } from "./src/utils/createCommand.ts";

if (import.meta.main) {
  runMain();
}

function runMain() {
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
  // pick installed args from the parsedArgs
  // name and version
  mainCommand.runCommand(args.slice(2, args.length));
}
