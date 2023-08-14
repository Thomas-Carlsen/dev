export type Command = {
  name: string;
  runCommand: (args: string[]) => Promise<void>;
  description: string;
  filePath: string;
  parentCommand?: string;
  commandsPadEnd?: number;
};
