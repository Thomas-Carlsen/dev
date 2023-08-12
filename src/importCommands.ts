import "./commands/version.ts";

// below only works when using deno to run the script and not when install the script as a single executable

// import { path } from "./deps.ts";

// // could maybe have used walk instead of recursive - import { walk } from "https://deno.land/std/fs/mod.ts";
// async function loadAllFiles(folderName: string) {
//   const commandsDirectoryFileUrl = path.join(
//     path.dirname(import.meta.url),
//     folderName,
//   );
//   const commandsDirectoryPath = path.fromFileUrl(commandsDirectoryFileUrl);
//   const fileItr = Deno.readDirSync(commandsDirectoryPath);

//   const modulePromises = [...fileItr].map(async (fileInfo) => {
//     if (fileInfo.isFile) {
//       const modulePath = path.resolve(
//         `${commandsDirectoryPath}/${fileInfo.name}`,
//       );
//       const moduleFileUrl = path.toFileUrl(modulePath).href;
//       await import(moduleFileUrl);
//     } else if (fileInfo.isDirectory) {
//       await loadAllFiles(`${folderName}/${fileInfo.name}`);
//     }
//   });
//   // Loading all top js files in the commands folder
//   await Promise.all(modulePromises);
// }

// await loadAllFiles("commands");
