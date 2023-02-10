import { useRecoilValue } from "recoil";

import { reposSubscribeState } from "store";
import { Repo } from "type";
import RepoCard from "components/RepoCard";

function Main() {
  const reposSubscribe = useRecoilValue<Repo[]>(reposSubscribeState);

  return (
    <div className="pt-16 mx-auto space-y-2 w-96">
      {reposSubscribe.map((repo) => (
        <RepoCard key={repo.id} repo={repo} showIssue={!!repo.open_issues} />
      ))}
    </div>
  );
}

export default Main;
