import useSWR from "swr";
import { toast } from "react-toastify";

import { fetchRepos } from "api";

function useRepos(user: string) {
  const { data } = useSWR([user], () => fetchRepos(user), {
    revalidateOnFocus: false,
    onError: (err) => {
      if (err) {
        return toast.error("요청을 실패했습니다. 다시 시도해 주세요.");
      }
    },
  });

  const repos = data?.data;

  return repos;
}

export default useRepos;
