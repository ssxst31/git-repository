import { useRecoilValue } from "recoil";

import { reposSubscribeState } from "store";
import { Repo } from "type";
import RepoCard from "components/repo/RepoCard";

function MainContainer() {
  const reposSubscribe = useRecoilValue<Repo[]>(reposSubscribeState);

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="pt-16 mx-auto space-y-2 w-96">
      {reposSubscribe.map((repo) => (
        <RepoCard key={repo.id} repo={repo} showIssue={!!repo.open_issues} />
      ))}
      <div
        className="fixed cursor-pointer bottom-4 right-4"
        onClick={moveToTop}
      >
        <img className="w-14 h-14" src="/icons/arrow-up.png" alt="arrow-up" />
      </div>
    </section>
  );
}

export default MainContainer;
