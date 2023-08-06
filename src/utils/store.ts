import { existsSync } from "../deps.ts";

const tempDir: string | undefined = Deno.env.get("TEMP");
const devcliDirPath = `${tempDir}\\.devcli`;
const configFilePath = `${devcliDirPath}\\config.json`;

export const enum configType {
  "GITHUB_PAT",
}

export function store(type: configType, value: string): void {
  checkIfConfigExist();
  const config = JSON.parse(Deno.readTextFileSync(configFilePath)); // TODO: should find a type for this
  if (type == configType.GITHUB_PAT) {
    let doWriteValue = true;
    if (config["github-pat"]) {
      doWriteValue = confirm(
        "Github PAT already stored - are you sure you want to overwrite?",
      );
    }
    if (doWriteValue) {
      config["github-pat"] = value;
    }
  }
  writeToConfig(config);
}

function checkIfConfigExist() {
  if (Deno.build.os === OS.windows) {
    if (!existsSync(configFilePath)) {
      if (!existsSync(devcliDirPath)) {
        Deno.mkdirSync(devcliDirPath);
      }
      Deno.writeTextFile(configFilePath, JSON.stringify({}));
    }
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

type Config = {
  "github-pat": string;
};

function writeToConfig(data: Config): void {
  Deno.writeTextFileSync(configFilePath, JSON.stringify(data));
}
