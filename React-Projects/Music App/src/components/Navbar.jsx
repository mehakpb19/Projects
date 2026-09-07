import { House, Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
const Navbar = () => {
  const navigate = useNavigate();
  const [Input, setInput] = useState("");
  return (
    <div className="px-10 h-[10%] flex justify-between w-full border-b items-center border-gray-400 bg-black bg-[linear-gradient(309deg,rgba(79,79,79,0.7)_-50%,rgba(20,20,20,1)_50%,rgba(79,79,79,0.7)_150%)]">
      <div className="text-3xl text-yellow-400 hover:text-yellow-500 cursor-pointer active:scale-99">
        <Link to="/" className="flex items-center gap-1">
          <img src="data:image/png;base64,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" alt="Logo" className=" w-15 mix-blend-screen" />
          Music
        </Link>
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
