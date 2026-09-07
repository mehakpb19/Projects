import { Clock3, Play, Shuffle } from "lucide-react";
import HorizontalCard from "./../HorizontalCard";

const Song = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="flex shrink-0 items-end gap-5 p-4 bg-black bg-[linear-gradient(309deg,rgba(15,15,15,1)_0%,rgba(79,79,79,0.5)_150%)]">
        <img
          className="rounded w-50 h-50"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsw9ob2HFGka8BiXpz6OVao1G_M7uD_JawjuViL_9s8SL4_kS_MLeTttQ&s=10"
          alt="Album Cover"
        />
        <div className="flex flex-col leading-2 mb-6">
          <p className="mb-5 text-gray-300">type</p>
          <h1 className="text-5xl text-gray-100 font-bold tracking-wider">
            Song Title
          </h1>
          <div className="flex mt-3 gap-3 items-center">
            <p className="text-sm font-bold">Artist </p>
            <p className="text-gray-400 text-sm">dteisl</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(87,68,35,0.5)_100%)]">
        <div className="shrink-0 w-full flex gap-2 px-5 py-4 items-center">
          <button className="cursor-pointer bg-[#92ff77] p-4 rounded-full">
            <Play size={20} fill="#1E1F22" stroke="#1E1F22" />
          </button>
          <button className="cursor-pointer p-4 rounded-full">
            <Shuffle size={25} fill="#CFCFCF" />
          </button>
        </div>

        <div className="shrink-0 justify-between text-gray-300 text-[12px] px-4 py-2 items-center border-b flex border-gray-500">
          <div className="flex gap-3 items-center">
            #<div className="flex gap-5 flex-col justify-center">Title </div>
          </div>
          <div className="flex gap-5 w-[55%] justify-between items-center">
            Plays
            <div className="flex gap-4">
              <Clock3 size={15} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
        <div className="shrink-0 w-full flex leading-0 flex-col gap-4 px-5 py-4 text-xs text-gray-300">
          <p>May 29, 2023</p>
          <p>c 2026juikeboxe</p>
          <p>c 2026 jukeboxes</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
