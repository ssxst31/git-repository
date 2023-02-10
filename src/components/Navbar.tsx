import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof search === "undefined" || search === "") {
      return toast.error("다시 확인해 주세요.");
    }

    navigate(`repository/${search}`);
    setSearch("");
  };

  return (
    <header className="inline-flex items-center justify-between w-full px-8 bg-[#161B22] h-14 fixed">
      <div
        className="flex items-center text-white cursor-pointer"
        onClick={() => {
          navigate(`/`);
        }}
      >
        <img src="/icons/logo.png" className="w-8 h-8 mr-2" alt="logo" />
        <span className="text-2xl">IssueHouse</span>
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
    </header>
  );
}

export default Navbar;
