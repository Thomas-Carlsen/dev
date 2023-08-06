import { path } from "../deps.ts";

export const GLOBALS = {
  commandsPath: path.fromFileUrl(path.dirname(import.meta.url)),
} as const;
