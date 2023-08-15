import { Config } from "../../services/config/Config.ts";
import { createCommand } from "../../utils/createCommand.ts";
import "./github.ts";

createCommand({
  name: "config",
  description: "Show config file of this cli tool",
  runCommand: run,
  filePath: import.meta.url,
});

async function run() {
  Config.print();
}
