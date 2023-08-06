import { green, path } from "../../deps.ts";
import { createCommand, findCommand } from "../../utils/createCommand.ts";
import { GLOBALS } from "../GLOBALS.ts";

createCommand({
  name: "create",
  description: "Used to create new commands for the dev-cli",
  runCommand: run,
  parentCommand: "commands",
  filePath: import.meta.url,
});

function run() {
  const name = prompt(green("? What is the command name:"));
  if (!name) return;
  const haveParentCommand = confirm(
    green("? Do this commmand have a parent command: "),
  );

  if (!haveParentCommand) {
    createNewFile({
      name,
      filePath: GLOBALS.commandsPath + "/" + name + ".ts",
    });
    return;
  }

  const parentCommandName = prompt(green("? What is the parent command name:"));
  if (parentCommandName) {
    const parentCommand = findCommand(parentCommandName);
    if (!parentCommand) {
      console.log(
        `Invalid Parent Command: No command created called ${parentCommandName}`,
      );
      return;
    }
    const dir = path.dirname(import.meta.url);
    console.log(dir);
    const newFilePath = path.fromFileUrl(path.join(dir, name + ".ts"));
    createNewFile({
      name,
      filePath: newFilePath,
      parentCommand: parentCommandName,
    });
  }
}

function createNewFile({
  name,
  filePath,
  parentCommand,
}: {
  name: string;
  filePath: string;
  parentCommand?: string;
}) {
  console.log(filePath);

  const newCommandContent = `import { path } from "deps.ts";
import { createCommand } from "/src/utils/createCommand.ts";

createCommand({
  name: "${name}",
  description: "generate description for ${name}",
  runCommand: run, ${parentCommand ? `${"\n\t"}parentCommand: "${parentCommand}",` : ""}
  filePath: import.meta.url,
});

function run() {
  console.log("running the '${name}' command");
}
  `;
  Deno.writeTextFileSync(filePath, newCommandContent);
}
