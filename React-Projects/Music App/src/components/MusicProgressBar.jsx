import { useState } from "react";

const MusicProgressBar = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div className="w-[35%] h-full items-center gap-3 flex">
      <h1 className="text-gray-300">{progress}</h1>
      <label className="relative w-full inline-flex flex-row-reverse items-center select-none">
        <input
          type="range"
          value={progress}
          onChange={(e)=>{
            setProgress(e.target.value);
          }}
          min="0"
          max="100"
          step="1"
          className="peer cursor-pointer appearance-none w-full h-1.5 hover:h-1.7 bg-[rgba(82,82,82,0.322)] overflow-hidden rounded-[5px] transition-[height] ease-in-out cursor-inherit 
            
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
      <h1 className="text-gray-300">4:10</h1>
    </div>
  );
};

export default MusicProgressBar;
