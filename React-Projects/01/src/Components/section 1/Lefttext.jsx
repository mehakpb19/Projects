import { ArrowUpRight } from "lucide-react";
const Lefttext = () => {
  return (
    <div className="flex flex-col h-10/12 mt-10 mr-10">
      <h1 className="text-5xl font-extrabold">
        Prospective <br /> customer  <br /> segmentation
      </h1>
      <p className=" mt-5 text-lg text-gray-800">
        Depending on customer
        <br /> satistaction and aocess <br /> to banking products, potential{" "}
        <br /> target audience can be divided <br /> into three groups
      </p>
      <div className="mt-auto">
         <ArrowUpRight size={80} strokeWidth={2} />
      </div>
    </div>
  );
};

export default Lefttext;
