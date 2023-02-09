import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { fetchRepos } from "api";
import { reposState } from "store";
import { Repo } from "type";

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");
  const setRepos = useSetRecoilState<Repo[]>(reposState);

  const onChangeSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(typeof search);
    if (typeof search === "undefined" || search === "") {
      setRepos([]);
    } else {
      const res = await fetchRepos(search);

      setRepos(res.data);
      navigate(`repository/${search}`);
      setSearch("");
    }
  };

  return (
    <div className="inline-flex items-center justify-between w-full px-8 bg-[#161B22] h-14">
      <div
        className="text-white"
        onClick={() => {
          navigate(`/`);
        }}
      >
        로고
      </div>
      <form onSubmit={(e) => onSearch(e)}>
        <input
          placeholder="Find a repository"
          type="text"
          value={search}
          onChange={onChangeSearch}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-[#6B7280] outline-none focus:border-red-500 focus:shadow-md"
        />
      </form>
    </div>
  );
}

export default Navbar;
