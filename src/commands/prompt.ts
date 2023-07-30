import { createCommand } from "../utils/createCommand.ts";

createCommand({
  name: "prompt",
  description: "Experimenting wirh prompt",
  runCommand: run,
});

// This is just an experiment - make some util at some point for other modules to use to ask questions
function run() {
  console.log("this is a test command");
  // TODO
  // print question
  // take user input
  // validate input
  // clear line - maybe, maybe not
  // Deno.writeAllSync(this.stdout, this.encoder.encode(msg));
  const name = prompt("Please enter your name:");
  console.log("Name:", name);
}
