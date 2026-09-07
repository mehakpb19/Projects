import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router";
import Home from "./components/Pages/Home";
import Song from "./components/Pages/Song";
import Navbar from "./components/Navbar";
import Search from "./components/Pages/Search";
import Player from "./components/Player";
const App = () => {
  return (
    <div className="h-screen relative  bg-black text-white ">
      <Navbar />
      <div className=" flex h-[78%]">
        <SideBar />
        <div className="flex flex-col w-full  relative items-center overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/Album/:AlbumId" element={<Song />} />
          </Routes>
        </div>
      </div>
      <Player></Player>
    </div>
  );
};

export default App;
