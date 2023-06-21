export const commands = ["github", "gh", "yo"] as const;

export type Command = (typeof commands)[number];
