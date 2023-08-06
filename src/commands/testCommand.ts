import { createCommand } from "../utils/createCommand.ts";

createCommand({
  name: "testCommand",
  description: "this is a test command description",
  runCommand: () => console.log("this is a test command"),
  parentCommand: "commands",
  filePath: import.meta.url,
});
