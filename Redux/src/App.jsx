import FullScreen from "./Components/FullScreen";
import Image from "./Components/Image";
import Searchcom from "./Components/Search";

const App = () => {
  return (
    <div className="bg-black min-h-screen h-full w-full text-white flex flex-col items-center">
      <h1 className="text-3xl pt-10">Photots and GIF</h1>
      <Searchcom />

      <div className="w-full mt-5">
        <div className="w-full grid grid-cols-4 gap-7 px-10 place-items-center  overflow-hidden">
          <Image /> <Image /> <Image /> <Image />
          <Image /> <Image /> <Image /> <Image />
          <Image /> <Image /> <Image /> <Image />
          <Image /> <Image />
        </div>
      </div>

      <FullScreen />
    </div>
  );
};
export default App;
