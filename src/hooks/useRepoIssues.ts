import useSWR from "swr";
import { toast } from "react-toastify";

import { fetchRepoIssues } from "api";

function useRepoIssues(username: string, repository: string) {
  const { data } = useSWR(
    `https://api.github.com/repos/${username}/${repository}/issues`,
    () => fetchRepoIssues(username, repository),
    {
      suspense: true,
      revalidateOnFocus: false,
      onError: (err) => {
        if (err) {
          return toast.error("요청을 실패했습니다. 다시 시도해 주세요.");
        }
      },
    }
  );

  const issues = data?.data;

  return issues;
}

export default useRepoIssues;
