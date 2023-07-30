// export * from "./commands/testCommand.ts";
// export * from "./commands/prompt.ts";
import { path } from "./deps.ts";

// console.log(Deno.execPath());

// console.log(import.meta.url);
// const directory = new URL("./commands", import.meta.url).pathname;
// console.log({ directory });

// const commandsDirectoryPath = await Deno.realPath("./commands");
const commandsDirectoryFileUrl = path.join(
  path.dirname(import.meta.url),
  "/commands"
);
const commandsDirectoryPath = path.fromFileUrl(commandsDirectoryFileUrl);
const fileItr = Deno.readDirSync(commandsDirectoryPath);
const modulePromises = [...fileItr].map(async (fileInfo) => {
  if (fileInfo.isFile) {
    const modulePath = path.resolve(
      `${commandsDirectoryPath}/${fileInfo.name}`
    );
    const moduleFileUrl = path.toFileUrl(modulePath).href;
    // console.log(moduleFileUrl);
    await import(moduleFileUrl);
  }
});
// Loading all top js files in the commands folder
await Promise.all(modulePromises);
// console.log({ modules });
// Deno.exit();
