import Playlist from "./Playlist";
const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col items-center gap-5 py-5 border-gray-500 w-[25%] scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700">
      <h1 className="text-3xl font-bold">Your Playlists</h1>
      <div className="flex flex-col gap-3 w-full h-full overflow-y-auto px-5 ">
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    </div>
  );
};

export default SideBar;
