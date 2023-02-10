import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Repo } from "type";
import { fetchRepos } from "api";
import RepoCard from "components/RepoCard";

function Repository() {
  const params = useParams();
  const { user } = params;

  const [repos, setRepos] = useState<Repo[]>();

  const loadRepos = async () => {
    if (typeof user !== "undefined") {
      const res = await fetchRepos(user);

      setRepos(res.data);
    }
  };

  useEffect(() => {
    loadRepos();
  }, [user]);

  if (!repos) {
    return <div />;
  }

  return (
    <div className="pt-16 mx-auto space-y-2 w-96">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} showIssue={false} />
      ))}
    </div>
  );
}

export default Repository;
