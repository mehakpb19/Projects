import { Search } from "lucide-react";
import { useContext, useState } from "react";
import axios from "axios";
import { UserdataContext } from "../Conext/UserContext";
const Searchsection = () => {
  const user = useContext(UserdataContext);  
  const [Input, setInput] = useState("");
  const [Fecthing, setFecthing] = useState(false);
  const fetchdata = async () => {
    if (Fecthing) {
      return;
    }
    if (!Input) {
      alert("plz enter the username");
      return;
    }
    setFecthing(true);
    try {
      let { data } = await axios.get(`https://api.github.com/users/${Input}`);
      let latestrepo = await axios.get(
        `https://api.github.com/users/${Input}/repos?sort=pushed&per_page=2`,
      );

      let latestrepodata = [];
      latestrepo.data.forEach((e) => {
        let obj = { name: e.name, url: e.html_url };
        latestrepodata.push(obj);
      });
      let Userdata = {
        username: data.name,
        bio: data.bio,
        dp: data.avatar_url,
        followers: data.followers,
        following: data.following,
        repos: data.public_repos,
        latestrepo: latestrepodata,
      };
      user.setUser(Userdata);
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 404) {
        alert("check your username");
      } else {
        alert("server error, Try again later");
      }
    }

    setFecthing(false);
  };
  return (
    <div className="flex justify-center w-full items-center gap-3">
      <input
        value={Input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="Search..."
        className="focus:border-[#1C5CC1] focus:border-2 transition-all outline-0 w-[70%] px-3 py-2 rounded-lg border-gray-600 border-2"
      />
      <button
        onClick={async () => {
          fetchdata();
        }}
        className="active:bg-[#29903b] text-1 bg-[#29903b] hover:bg-[#359f47] flex text-white py-2 px-4 items-center rounded-lg"
      >
        <Search size={18} />
        Search
      </button>
    </div>
  );
};

export default Searchsection;
