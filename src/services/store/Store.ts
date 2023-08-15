import { existsSync } from "../../deps.ts";

const tempDir: string | undefined = Deno.env.get("HOMEPATH") ?? Deno.env.get("HOME");
const devcliDirPath = `${tempDir}\\.devcli`;
const configFilePath = `${devcliDirPath}\\config.json`;

export const Store = {
  getConfig(): Config {
    if (!checkIfConfigExist()) {
      console.log(`Not been implemented for this os '${Deno.build.os}'`);
      Deno.exit();
    }
    const configFile = JSON.parse(Deno.readTextFileSync(configFilePath));
    return configFile;
  },
  writeConfig(config: Config) {
    Deno.writeTextFileSync(configFilePath, JSON.stringify(config));
  },
};

function checkIfConfigExist(): boolean {
  if (Deno.build.os === OS.windows) {
    if (!existsSync(configFilePath)) {
      if (!existsSync(devcliDirPath)) {
        Deno.mkdirSync(devcliDirPath);
      }
      Deno.writeTextFile(configFilePath, JSON.stringify({}));
    }
    return true;
  } else {
    return false;
  }
}

const OS = {
  darwin: "darwin",
  linux: "linux",
  windows: "windows",
  freebsd: "freebsd",
  netbsd: "netbsd",
  aix: "aix",
  solaris: "solaris",
  illumos: "illumos",
};

export type Config = {
  github: {
    pat: string;
  };
};
