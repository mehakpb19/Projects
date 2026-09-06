const Song = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex items-end gap-5 p-4 bg-black bg-[linear-gradient(309deg,rgba(15,15,15,1)_0%,rgba(79,79,79,0.5)_150%)]">
        <img
          className="rounded w-50 h-50 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsw9ob2HFGka8BiXpz6OVao1G_M7uD_JawjuViL_9s8SL4_kS_MLeTttQ&s=10"
          alt=""
        />
        <div className="flex flex-col leading-2 mb-6">
          <p className="mb-5 text-gray-300">type</p>
          <h1 className="text-5xl text-gray-100 font-bold tracking-wider  ">
            Song Title
          </h1>
          <div className="flex mt-3 gap-3 items-center">
            <p className="text-sm font-bold">Artist </p>
            <p className="text-gray-400 text-sm">dteisl</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5  bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(87,68,35,0.5)_100%)] h-full">

      </div>
    </div>
  );
};

export default Song;
