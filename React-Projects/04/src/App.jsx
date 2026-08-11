import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Men from "./pages/Men";
import NotFound from "./pages/NotFound";
import Contactid from "./pages/Contactid";

const App = () => {
  return (
    <div className="bg-black text-white h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<Contactid />} />
        <Route path="/aboutus" element={<Aboutus />}>
          <Route path="men" element={<Men />} />
          <Route path="mon" element={<Men />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
