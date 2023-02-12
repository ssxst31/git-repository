import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          className="w-full px-3 py-2 text-black bg-white border rounded-md outline-none focus:border-red-500 focus:shadow-md"
        />
      </form>
    </header>
  );
}

export default Navbar;
