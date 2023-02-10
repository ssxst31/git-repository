import { useRecoilState } from "recoil";
import { toast } from "react-toastify";

import { reposSubscribeState } from "store";
import { Repo } from "type";
import RepoIssues from "components/RepoIssues";
import ErrorBoundary from "components/ErrorBoundary";

interface RepoCardProps {
  repo: Repo;
  showIssue?: boolean;
}

function RepoCard({ repo, showIssue }: RepoCardProps) {
  const [reposSubscribe, setReposSubscribe] =
    useRecoilState<Repo[]>(reposSubscribeState);

  return (
    <a
      href={repo.clone_url}
      target="_blank"
      rel="noreferrer"
      className="justify-center inline-block w-full"
      key={repo.id}
    >
      <div className="flex flex-col justify-between px-4 py-4 bg-white border border-black border-solid rounded-2xl">
        <div className="flex justify-between mb-4">
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
                  return toast.error("구독은 최대 4개까지 됩니다.");
                setReposSubscribe((prev) => prev.concat(repo));
              }
            }}
          >
            {reposSubscribe.some((el) => el.id === repo.id) ? "삭제" : "추가"}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-slate-400">{repo.language}</div>
          <div className="text-slate-300">{repo.updated_at}</div>
        </div>
        {showIssue && (
          <ErrorBoundary>
            <div className="pt-2 mt-2 text-lg font-semibold border-t border-gray-500 border-solid">
              issues
              <RepoIssues loginId={repo.owner.login} repository={repo.name} />
            </div>
          </ErrorBoundary>
        )}
      </div>
    </a>
  );
}

export default RepoCard;
