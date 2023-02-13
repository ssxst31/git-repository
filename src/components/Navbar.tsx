import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const onSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let inputValue = inputRef.current?.value;
    const notHangeulRegExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    if (
      typeof inputValue === "undefined" ||
      inputValue === "" ||
      notHangeulRegExp.test(inputValue)
    ) {
      return toast.error("다시 확인해 주세요.");
    }

    navigate(`repository/${inputValue}`);
    inputValue = "";
  };

  return (
    <header className="inline-flex items-center justify-between w-full px-8 bg-[#161B22] h-14 fixed">
      <div
        className="flex items-center text-white cursor-pointer"
        onClick={() => {
          navigate(`/`);
        }}
      >
        <img
          src="https://i.postimg.cc/RCgXk3Bx/logo.png"
          className="w-8 h-8 mr-2"
          alt="logo"
        />
        <span className="text-2xl">IssueHouse</span>
      </div>
      <form onSubmit={(e) => onSearch(e)}>
        <input
          ref={inputRef}
          placeholder="Find a repository"
          type="text"
          className="w-full px-3 py-2 text-black bg-white border rounded-md outline-none focus:border-red-500 focus:shadow-md"
        />
      </form>
    </header>
  );
}

export default Navbar;
