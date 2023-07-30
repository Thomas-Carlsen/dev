export const commands = ["github", "gh", "yo", "os", "commands"] as const;

export type Command = (typeof commands)[number];
