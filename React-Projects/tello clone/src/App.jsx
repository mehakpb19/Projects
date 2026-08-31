import { useEffect, useState } from "react";
import TaskSection from "./components/TaskSection";
import { addsection } from "./redux/Taskes";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const [Input, setInput] = useState("");
  const { Sections } = useSelector((state) => state.Taskes);
  useEffect(() => {
    localStorage.setItem("taskes", JSON.stringify(Sections));
  }, [Sections]);
  return (
    <div className="flex bg-black/80 text-white pt-3 min-h-screen h-full flex-col items-center">
      <h1 className="text-4xl mb-3">Tello</h1>
      <div className="bg-white w-[95%] rounded gap-5 text-black flex p-5">
        {Object.keys(Sections).map((e) => {
          return <TaskSection key={e} title={e} />;
        })}
        <div className="bg-black/80 h-fit px-4 flex flex-col items-center w-fit gap-2 rounded-2xl py-4">
          <input
            placeholder="Enter Section name"
            type="text"
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            className=" text-xs h-10 my-2 p-2 bg-black/60 text-white w-45 outline-none rounded-2xl"
          />
          <button
            onClick={() => dispatch(addsection(Input))}
            className="active:scale-95 border h-10 my-2 p-2 rounded-2xl bg-emerald-600 border-emerald-600 text-white whitespace-nowrap"
          >
            New Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
