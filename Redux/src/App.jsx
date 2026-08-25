import Searchcom from "./Components/Search";
import Result from "./Result";

const App = () => {
  return (
    <div className="bg-black min-h-screen h-full w-full text-white flex flex-col items-center">
     <h1 className="text-3xl pt-10">search Photots</h1>
      <Searchcom />
      <Result />
    </div>
  );
};
export default App;
