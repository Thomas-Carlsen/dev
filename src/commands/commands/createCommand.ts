import { createCommand } from "../../utils/createCommand.ts";

createCommand({
  name: "create",
  description: "Used to create new commands for the dev-cli",
  runCommand: run,
  parentCommand: "commands",
});

function run() {
  // TODO
  // print question
  // take user input
  // validate input
  // clear line - maybe, maybe not
  // Deno.writeAllSync(this.stdout, this.encoder.encode(msg));
  const name = prompt("Please enter your name:");
  console.log("Name:", name);
}
