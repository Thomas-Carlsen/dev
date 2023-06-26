export const commands = ["github", "gh", "yo", "os"] as const;

export type Command = (typeof commands)[number];
