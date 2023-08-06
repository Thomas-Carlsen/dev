export type Command = {
  name: string;
  runCommand: (args: string[]) => void;
  description: string;
  filePath: string;
  parentCommand?: string;
  commandsPadEnd?: number;
};
