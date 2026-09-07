import { SkipForward, Volume2, Play, SkipBack } from "lucide-react";
import MusicProgressBar from "./MusicProgressBar";
const Player = () => {
  return (
    <div className=" h-[12%] w-full">
      <div className="bg-gray-300/20 h-full w-full flex relative">
        {/* palying song */}

        <div className=" h-full gap-5 items-center flex px-6">
          <img
            className="w-12 rounded-full animate-spin [animation-duration:4s] origin-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsw9ob2HFGka8BiXpz6OVao1G_M7uD_JawjuViL_9s8SL4_kS_MLeTttQ&s=10"
            alt=""
          />
          <div className="flex flex-col leading-4 mb-1">
            <h1 className="font-bold">Song Title</h1>
            <p className="text-gray-400">Artist</p>
          </div>
          <div>
            <label className="flex gap-2.5 cursor-pointer justify-center items-center select-none">
              {/* The input now matches the size of the custom checkbox wrapper to capture clicks perfectly */}
              <input
                type="checkbox"
                defaultChecked
                className="peer absolute opacity-0 h-5 w-5 cursor-pointer z-10"
              />
              <div
                className="relative h-5 w-5 shrink-0 rounded-full bg-[rgba(16,16,16,0.5)] transition-all duration-200 ease-out box-border flex items-center justify-center
    after:content-[''] after:absolute after:opacity-0 after:w-[0.25em] after:h-[0.5em] after:border-black after:border-r-[0.15em] after:border-b-[0.15em] after:rotate-45 after:transition-all after:duration-300 after:ease-in-out
    peer-checked:bg-[#92ff77] peer-checked:after:opacity-100 peer-checked:after:top-[25%] peer-checked:after:left-[38%]"
              />
            </label>
          </div>
        </div>

        {/* Music Progress Bar */}

        <div className=" w-full  flex flex-col absolute inset-0 mt-3 items-center">
          <div className="  items-center flex gap-5 ">
            <button className="active:scale-100  hover:scale-105 outline-none">
              <SkipBack fill="#f1f1f1" size={20} />
            </button>
            <button className="bg-[#f1f1f1] rounded-full active:scale-96 hover:bg-white p-1.5 outline-none">
              <Play fill="black" size={20} />
              {/* {<Pause fill="white" />} */}
            </button>
            <button className="active:scale-100  hover:scale-105 outline-none">
              <SkipForward fill="#f1f1f1" size={20} />
            </button>
          </div>
          <MusicProgressBar />
        </div>

        {/* Volume Control */}

        <div className=" w-[12%] flex items-center justify-center h-[90%] absolute inset-0 ml-auto gap-2 mr-0">
          <button className="active:scale-90">
            <Volume2 size={20} />
          </button>
          <label className="relative w-[60%] inline-flex flex-row-reverse items-center select-none">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              className="peer cursor-pointer appearance-none w-full h-1.25 hover:h-1.7 bg-[rgba(82,82,82,0.322)] overflow-hidden rounded-[5px] transition-[height] ease-in-out cursor-inherit 
            
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-0 
            [&::-webkit-slider-thumb]:h-0 
            [&::-webkit-slider-thumb]:shadow-[-500px_0_5px_500px_#92ff77,-500px_0_20px_500px_#92ff77] 
            
            [&::-moz-range-thumb]:w-0 
            [&::-moz-range-thumb]:h-0 
            [&::-moz-range-thumb]:rounded-none 
            [&::-moz-range-thumb]:border-none 
            [&::-moz-range-thumb]:shadow-[-100px_0_5px_100px_#92ff77,-100px_0_20px_100px_#92ff77]"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Player;
