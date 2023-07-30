import { path } from "./deps.ts";

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
    await import(moduleFileUrl);
  } else if (fileInfo.isDirectory) {
    const modulePath = path.resolve(
      `${commandsDirectoryPath}/${fileInfo.name}/index.ts`
    );
    try {
      await Deno.open(modulePath);
    } catch (e) {
      return;
    }
    const moduleFileUrl = path.toFileUrl(modulePath).href;
    await import(moduleFileUrl);
  }
});
// Loading all top js files in the commands folder
await Promise.all(modulePromises);
