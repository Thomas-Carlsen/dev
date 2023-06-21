import { bold, red } from "./deps.ts";
import { help } from "./mainHelp.ts";

export const errorAndHelp = (error?: string): void => {
  if (!error) {
  } else if (error === "INVALID_KEY") {
    console.log(
      bold(red(`Error: Invalid API key. Use --config flag to set key`))
    );
  } else console.log(bold(red(`Error: ${error}\n`)));

  help();
};
