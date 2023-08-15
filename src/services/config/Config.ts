import { Store } from "../store/Store.ts";

export const Config = {
  print() {
    const configFile = Store.getConfig();
    console.log(configFile);
  },
  Github: {
    print() {
      const githubConfig = getGithubConfig();
      console.log(githubConfig);
    },
    pat: getGithubPat,
    storePat: storePat,
  },
};

function getGithubPat(): string | undefined {
  const githubConfig = getGithubConfig();
  if ("pat" in githubConfig) return githubConfig["pat"] as string | undefined;
  return undefined;
}

function getGithubConfig() {
  const configFile = Store.getConfig();
  if (configFile["github"]) return configFile["github"];
  return {};
}

function storePat(pat: string) {
  const configFile = Store.getConfig();
  const configGithubPat = configFile.github?.pat;
  if (configGithubPat) {
    const overwritePat = confirm(
      "Github PAT already stored - are you sure you want to overwrite?",
    );
    if (!overwritePat) return;
  }
  if (!configFile["github"]) configFile["github"] = {};
  configFile["github"]["pat"] = pat;
  Store.writeConfig(configFile);
}
