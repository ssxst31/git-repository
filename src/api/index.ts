import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GIT_TOKEN,
});

export const fetchRepos = async () => {
  const resp = await octokit.request("GET /users/{username}/repos", {
    username: "ssxst31",
  });

  return resp;
};
