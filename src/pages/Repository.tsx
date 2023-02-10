import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import { Repo } from "type";
import { reposState } from "store";
import { fetchRepos } from "api";
import RepoCard from "components/RepoCard";

function Repository() {
  const params = useParams();

  const { user } = params;

  const [repos, setRepos] = useRecoilState<Repo[]>(reposState);

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
    <div className="pt-16 mx-auto space-y-2 w-96">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} showIssue={false} />
      ))}
    </div>
  );
}

export default Repository;
