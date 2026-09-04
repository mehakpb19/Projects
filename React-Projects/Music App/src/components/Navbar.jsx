import { House, Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  const [Input, setInput] = useState("");
  return (
    <div className="px-10 h-[10%] flex justify-between w-full border-b items-center border-gray-400">
      <div className="text-3xl text-yellow-400 hover:text-yellow-500 cursor-pointer active:scale-99">
        <Link to="/">Music</Link>
      </div>
      <div className="flex gap-2 w-full relative justify-center  ">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="rounded-full p-2 bg-white/15 hover:bg-white/19 cursor-pointer"
        >
          <House size={21} color="#cfcfcf" />
        </button>
        <div className="w-[25%] relative cursor-pointer">
          <Search
            className="absolute top-1/2 -translate-y-1/2 left-[3%]"
            size={18}
            color="#cfcfcf"
          />
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;

              //run anything
            }}
            value={Input}
            type="text"
            className=" h-full w-full bg-white/15 rounded-3xl outline-none px-8 text-[13px] hover:bg-white/19"
            placeholder="What do you want to play?"
          />
        </div>
      </div>
      <div>
        <a
          href="https://github.com/mehakpb19/Projects"
          target="_blank"
          className="hover:bg-white/19 active:scale-95 flex items-center gap-2 border border-gray-500 rounded p-2"
        >
          <svg
            aria-label="GitHub"
            viewBox="0 0 24 24"
            width={26}
            height={26}
            fill={"white"}
            xmlns="http://w3.org"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          Github
        </a>
      </div>
    </div>
  );
};

export default Navbar;
