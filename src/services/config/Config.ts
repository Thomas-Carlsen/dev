import { Store } from "../store/Store.ts";

export const Config = {
  print() {
    const configFile = Store.getConfig();
    console.log(configFile);
  },
  Github: {
    print: getGithubConfig(),
    pat: getGithubPat(),
  },
};

function getGithubPat(): object {
  const githubConfig = getGithubConfig();
  if ("pat" in githubConfig && githubConfig["pat"] instanceof Object) return githubConfig["pat"];
  return {};
}

function getGithubConfig(): object {
  const configFile = Store.getConfig();
  if (configFile["github"]) return JSON.parse(configFile["github"]);
  return {};
}
