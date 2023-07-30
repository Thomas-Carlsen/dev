export type Command = {
  name: string;
  runCommand: (args: string[]) => void;
  description: string;
  parentCommand?: string;
  commandsPadEnd?: number;
};
