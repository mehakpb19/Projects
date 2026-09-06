import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router";
import Home from "./components/Pages/Home";
import Song from "./components/Pages/Song";
import Artist from "./components/Pages/Artist";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Pages/Search";
import Player from "./components/Player";
const App = () => {
  return (
    <div className="h-screen relative  bg-black text-white ">
      <Navbar />
      <div className=" flex h-[78%]">
        <SideBar />
        <div className="flex flex-col w-full  relative items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/song/:songId" element={<Song />} />
            <Route path="/artist/:ArtistId" element={<Artist />} />
          </Routes>
          <Footer />
        </div>
      </div>
      <Player></Player>
    </div>
  );
};

export default App;
