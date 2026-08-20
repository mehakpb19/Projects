import { Bookmark } from "lucide-react";

const FullScreen = () => {
  return (
    <div className="h-full w-full fixed flex items-center justify-center">
      <div className="z-10 h-full flex items-center">
        <div className="h-[95%] relative">
          <img
            className="h-full"
            src="https://images.unsplash.com/photo-1773332585754-f1436987743b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDM2ODcxfDF8MXxhbGx8MXx8fHx8fHx8MTc4NzIzMTc0NHw&ixlib=rb-4.1.0&q=80&w=400"
            alt=""
          />
          <button className="active:scale-95 bg-[#ffffffa6] w-10 rounded-full p-2 right-8 top-8 absolute h-10 ">
            <Bookmark color="black" />
          </button>
        </div>
      </div>
      <div className="bg-[#000000b7] h-full w-full absolute"></div>
      <h1 className="text-5xl"></h1>
    </div>
  );
};

export default FullScreen;
