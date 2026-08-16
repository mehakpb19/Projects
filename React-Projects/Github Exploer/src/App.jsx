import { useContext } from "react";
import Card from "./components/Card";
import Searchsection from "./components/Search";
import { UserdataContext } from "./Conext/UserContext";

const App = () => {
  const user = useContext(UserdataContext);

  return (
    <div className="w-full bg-black min-h-screen h-full flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mt-[3%] mb-5">Github Explorer</h1>
      <div className=" bg-[#22242A] p-3 rounded-lg w-[50%] flex flex-col items-center justify-center">
        <Searchsection />
        {Object.keys(user.User).length === 0 ? (
          <div className="text-4xl my-10">No User To Show</div>
        ) : (
          <Card />
        )}
      </div>
    </div>
  );
};

export default App;
