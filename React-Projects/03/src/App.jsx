import { useEffect, useState } from "react";
import Gallary from "./Components/Gallary";
import Header from "./Components/Header";
import axios from "axios";

const App = () => {
  const [Data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const bottomPosition = document.documentElement.scrollHeight;
    if (scrollPosition + 1 >= bottomPosition) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=16`
        );
        setData((prev) => [...prev, ...response.data]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchImages();
  }, [page]);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="overflow-clip font-mono tracking-[-1px] pr-10 pl-10 text-white w-full bg-black scrollbar-thin scrollbar-thumb-gray-200 overflow-y-auto ">
      <Header />
      <Gallary data={Data} loading={loading} />
    </div>
  );
};

export default App;
