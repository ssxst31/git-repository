import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GIT_TOKEN,
});

export const fetchRepos = async (username: string) => {
  const res = await octokit.request("GET /users/{username}/repos", {
    username: username,
    sort: "updated",
  });

  return res;
};
