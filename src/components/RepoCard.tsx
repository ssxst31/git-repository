import { useRef } from "react";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";
import { formatDistance, subDays } from "date-fns";
import ko from "date-fns/locale/ko";

import { reposSubscribeState } from "store";
import { Repo } from "type";
import RepoIssues from "components/RepoIssues";
import ErrorBoundary from "components/ErrorBoundary";
import Avatar from "components/Avatar";

interface RepoCardProps {
  repo: Repo;
  showIssue?: boolean;
}

function RepoCard({ repo, showIssue }: RepoCardProps) {
  const [reposSubscribe, setReposSubscribe] =
    useRecoilState<Repo[]>(reposSubscribeState);
  const contactRef = useRef<HTMLAnchorElement>(null);

  const onContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const subscribeRepo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    if (reposSubscribe.some((el) => el.id === repo.id)) {
      setReposSubscribe((prev) => prev.filter((el) => el.id !== repo.id));
    } else {
      if (reposSubscribe.length > 3)
        return toast.error("구독은 최대 4개까지 됩니다.");
      setReposSubscribe((prev) => prev.concat(repo));
    }
  };

  return (
    <a
      href={repo.clone_url}
      target="_blank"
      rel="noreferrer"
      className="justify-center inline-block w-full"
      key={repo.id}
      ref={contactRef}
    >
      <div className="flex flex-col justify-between px-4 py-4 bg-white border border-black border-solid rounded-2xl">
        <div className="flex justify-between mb-4">
          <div className="flex">
            <Avatar src={repo.owner.avatar_url} />
            <div className="w-64 text-xl font-semibold text-black">
              {repo.full_name}
            </div>
          </div>
          <div
            className="text-sm font-semibold text-black"
            onClick={(e) => {
              subscribeRepo(e);
            }}
          >
            {reposSubscribe.some((el) => el.id === repo.id) ? "삭제" : "추가"}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-slate-400">{repo.language}</div>
          <div className="text-sm text-gray-300">
            {repo.updated_at &&
              formatDistance(
                new Date(repo.updated_at),
                subDays(new Date(), 0),
                {
                  addSuffix: true,
                  locale: ko,
                }
              )}
          </div>
        </div>
        {showIssue && (
          <ErrorBoundary>
            <div className="pt-2 mt-2 text-lg font-semibold border-t border-gray-500 border-solid">
              issues
              <RepoIssues
                loginId={repo.owner.login}
                repository={repo.name}
                onContactClick={onContactClick}
              />
            </div>
          </ErrorBoundary>
        )}
      </div>
    </a>
  );
}

export default RepoCard;
