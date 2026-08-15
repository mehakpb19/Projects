import { useState } from "react";

const Form = (props) => {
  const [Titel, SetTitel] = useState("");
  const [Note, SetNote] = useState("");
  return (
    <div className="lg:w-6/12 lg:h-full flex items-center justify-center">
      <form className="flex flex-col gap-3 p-10 w-100">
        <input
        className="border rounded-md p-1 h-10  border-gray-400"
          type="text"
          placeholder="Enter the Note Titel"
          value={Titel}
          onChange={(e) => {
            SetTitel(e.target.value);
          }}
        />
        <textarea
        className="border rounded-md p-2 h-25 border-gray-400"
          type="text"
          placeholder="Enter the Note..."
          value={Note}
          onChange={(e) => {
            SetNote(e.target.value);
          }}
        />
        <button
        className="border rounded-md p-1 outline-none bg-white active:scale-95 text-black font-bold"
          onClick={(e) => {
            e.preventDefault();
            let ArrCopy = [...props.Arr]
            ArrCopy.push({Titel:Titel , Note:Note})
            props.SetArr(ArrCopy);           
            SetNote("");
            SetTitel("");

          }}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Form;
