export const commands = ["repos"] as const;

export type GithubCommand = (typeof commands)[number];
