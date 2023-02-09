import { Octokit } from "octokit";
import Axios from "axios";

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

export const fetchRepoIssues = async (username: string, repository: string) => {
  const res = Axios.get(
    `https://api.github.com/repos/${username}/${repository}/issues`
  );

  return res;
};
