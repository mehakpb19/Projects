import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router";
import Home from "./components/Pages/Home";
import Song from "./components/Pages/Song";
import Artist from "./components/Pages/Artist";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div  className="h-screen bg-black text-white bg-[linear-gradient(130deg,rgba(8,42,43,0.6)_5%,rgba(15,15,15,0.5)_40%,rgba(15,15,15,0.5)_60%,rgba(87,68,35,0.8)_100%)]">
      <Navbar />
      <div className=" flex h-[90%] gap-5">
        <SideBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/song/:id" element={<Song />} />
            <Route path="/artist/:id" element={<Artist />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
