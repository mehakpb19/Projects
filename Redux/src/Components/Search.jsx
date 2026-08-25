import { useState } from "react";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setquery } from "../redux/getdataSlice.js";

const Searchcom = () => {
  const [Input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="relative mt-2">
      <input
        className="outline-none w-100 py-2 rounded-full bg-gray-700 px-4"
        type="text"
        value={Input}
        placeholder="Search Photos and GIF"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if(e.key == "Enter"){          
          dispatch(setquery(Input));
        }}}
      />
      <button
        className="active:scale-95 bg-blue-600 p-2 rounded-full absolute left-full top-1/2 -translate-y-1/2 -translate-x-full"
        onClick={() => {
          dispatch(setquery(Input));
        }}
      >
        <Search />
      </button>
    </div>
  );
};
export default Searchcom;
