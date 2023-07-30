import { createCommand } from "../utils/createCommand.ts";

createCommand({
  name: "prompt",
  description: "Experimenting wirh prompt",
  runCommand: run,
});

function run() {
  console.log("this is a test command");
}
