import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import RepoCard from "components/RepoCard";
import useRepos from "hooks/useRepos";

function RepositoryContainer() {
  const params = useParams() as { user: string };
  const { user } = params;

  const repos = useRepos(user);

  if (!repos) {
    return (
      <div className="pt-16 mx-auto space-y-2 w-96">
        레파지토리를 찾고있습니다.
      </div>
    );
  }

  if (repos.length === 0) {
    toast.error("레파지토리가 비어있습니다.");
  }

  return (
    <div className="pt-16 mx-auto space-y-2 w-96">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} showIssue={false} />
      ))}
    </div>
  );
}

export default RepositoryContainer;
