import Rightcards from "./Rightcards";
import Lefttext from "./Lefttext";

const Center = () => {
  return (
    <div className="flex ml-10 mr-10 h-full">
      <Lefttext />
      <Rightcards />
    </div>
  );
};

export default Center;
