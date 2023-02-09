import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import { Repo } from "type";
import { reposState, reposSubscribeState } from "store";
import { fetchRepos } from "api";

function Repository() {
  const params = useParams();

  const { user } = params;

  const [repos, setRepos] = useRecoilState<Repo[]>(reposState);
  const [reposSubscribe, setReposSubscribe] =
    useRecoilState<Repo[]>(reposSubscribeState);

  const loadRepos = async () => {
    if (typeof user === "undefined" || user === "") {
      setRepos([]);
    } else {
      const res = await fetchRepos(user);
      setRepos(res.data);
    }
  };

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <div className="mx-auto space-y-2 text-red-500 w-96">
      {repos.map((repo) => (
        <a
          href={repo.clone_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-full"
          key={repo.id}
        >
          <div className="flex flex-col justify-between h-24 px-4 py-4 bg-white border border-black border-solid rounded-2xl">
            <div className="flex justify-between">
              <div className="text-xl font-semibold text-black w-72">
                {repo.full_name}
              </div>
              <div
                className="text-sm font-semibold text-black"
                onClick={(e) => {
                  e.preventDefault();
                  if (reposSubscribe.some((el) => el.id === repo.id)) {
                    setReposSubscribe((prev) =>
                      prev.filter((el) => el.id !== repo.id)
                    );
                  } else {
                    if (reposSubscribe.length > 3)
                      return alert("구독은 최대 4개까지 됩니다.");
                    setReposSubscribe((prev) => prev.concat(repo));
                  }
                }}
              >
                {reposSubscribe.some((el) => el.id === repo.id)
                  ? "삭제"
                  : "추가"}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-slate-400">{repo.language}</div>
              <div className="text-slate-300">{repo.updated_at}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Repository;
