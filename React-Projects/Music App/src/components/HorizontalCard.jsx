const HorizontalCard = () => {
  return (
    <div className="justify-between p-4 items-center h-[50%] flex ">
      <div className="flex gap-3 items-center">
        <h1>1</h1>
        <div className="flex gap-5 flex-col justify-center">
          <h1 className="text-[17px] leading-0 font-semibold">Song Title</h1>
          <p className="text-gray-400 leading-0 text-sm">Artist Name</p>
        </div>
      </div>
      <div className="flex gap-5 w-[55%] justify-between items-center">
        <p className="text-gray-400 tracking-tight text-sm translate-x-[-50%]">145,468,32</p>
        <div className="flex gap-4">
            <label className="flex gap-2.5 cursor-pointer justify-center items-center ">
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
            <p className="text-gray-400 tracking-tight text-sm">3:45</p>

        </div>
        </div>
    </div>
  );
};

export default HorizontalCard;
