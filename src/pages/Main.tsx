import { useState, useEffect } from "react";

import { fetchRepos } from "api";
import { Repo } from "type";

function Main() {
  const [repos, setRepos] = useState<Repo[]>();

  const fetchData = async () => {
    const res = await fetchRepos();
    setRepos(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!repos) return <></>;
  console.log(repos);
  return <div className="text-red-500">{repos.map((el: any) => el.id)}</div>;
}

export default Main;
