import useSWR from "swr";

import { fetchRepoIssues } from "api";

function useRepoIssues(username: any, repository: any) {
  const { data } = useSWR(
    `https://api.github.com/repos/${username}/${repository}/issues`,
    () => fetchRepoIssues(username, repository),
    {
      suspense: true,
    }
  );

  const issues = data.data ?? [];

  return issues;
}

export default useRepoIssues;
