import { useRecoilValue } from "recoil";

import { reposSubscribeState } from "store";
import { Repo } from "type";
import RepoCard from "components/repo/RepoCard";
import { Suspense } from "react";

function MainContainer() {
  const reposSubscribe = useRecoilValue<Repo[]>(reposSubscribeState);

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (reposSubscribe.length === 0) {
    return (
      <div className="pt-16 mx-auto space-y-2 w-96">
        구독된 레파지토리가 없습니다.
      </div>
    );
  }

  return (
    <section className="pt-16 mx-auto space-y-2 w-96">
      <Suspense fallback={<span>로딩중입니다.</span>}>
        {reposSubscribe.map((repo) => (
          <RepoCard key={repo.id} repo={repo} showIssue={!!repo.open_issues} />
        ))}
      </Suspense>
      <div
        className="fixed cursor-pointer bottom-4 right-4"
        onClick={moveToTop}
      >
        <img
          className="w-14 h-14"
          src="https://i.postimg.cc/t4KrBLH1/arrow-up.png"
          alt="arrow-up"
        />
      </div>
    </section>
  );
}

export default MainContainer;
