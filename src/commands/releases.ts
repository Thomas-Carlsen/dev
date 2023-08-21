import { Octokit } from "https://esm.sh/octokit@3.1.0?dts";
import { createCommand } from "../utils/createCommand.ts";
import { Config } from "../services/config/Config.ts";

createCommand({
  name: "releases",
  description: "Check for releases for this cli tool",
  runCommand: run,
  filePath: import.meta.url,
});

async function run() {
  const githubPat = Config.Github.pat();
  if (!githubPat) {
    console.log(`No PAT for Github has been stored.`);
    Deno.exit();
  }
  // get pat from local store, set by config
  const octokit = new Octokit({ auth: githubPat });

  // const res = await octokit.rest.users.getAuthenticated();
  // console.log(res);
  // console.log("Hello, %s", login);

  const hello = await octokit.request("GET /repos/Thomas-Carlsen/dev/releases", {
    owner: "OWNER",
    repo: "REPO",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  console.log(hello);

  // latest
  // await octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
  //   owner: 'OWNER',
  //   repo: 'REPO',
  //   headers: {
  //     'X-GitHub-Api-Version': '2022-11-28'
  //   }
  // })

  // Get a release by tag name
  // await octokit.request("GET /repos/{owner}/{repo}/releases/tags/{tag}", {
  //   owner: "OWNER",
  //   repo: "REPO",
  //   tag: "TAG",
  //   headers: {
  //     "X-GitHub-Api-Version": "2022-11-28",
  //   },
  // });
}
