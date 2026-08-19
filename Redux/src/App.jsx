import { useSelector, useDispatch } from "react-redux";
import { amount, discrement, increment } from "./CouterSlice";
import { useState } from "react";
const App = () => {
  const Dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setnum] = useState('')
  return (
    <div>
      <h1>{count}</h1>
      <input type="number" value={num} onChange={(e)=>{
        setnum(e.target.value)
      }} />
      <button
        onClick={() => {
          Dispatch(increment());
        }}
      >
        increse
      </button>
      <button
        onClick={() => {
          Dispatch(discrement());
        }}
        >
        decrese
      </button>
      <button
      onClick={()=>{
        Dispatch(amount(Number(num)));

      }}>
        add amoutn
      </button>
    </div>
  );
};

export default App;
