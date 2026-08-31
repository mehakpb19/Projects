import { useDispatch } from "react-redux";
import { check } from "../redux/Taskes";

const Checkbox = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="content active:scale-95">
      <label className="relative block h-[20px] w-[20px] cursor-pointer overflow-hidden rounded-[5px] border-[1px] border-transparent ring-2 ring-white">
        {/* The 'peer' class allows sibling elements to react to this input's state */}
        <input 
          id="ch1" 
          type="checkbox" 
          className="peer invisible absolute left-[50px]" 
          checked={props.ischecked}
          onChange={()=>dispatch(check([props.section,props.task,props.ischecked]))}
        />
        {/* 'peer-checked:*' updates the top and left positions when the input is checked */}
        <div className="absolute -left-[52px] -top-[52px] z-[100] h-[60px] w-[60px] rotate-45 bg-white transition-all duration-300 ease-in-out peer-checked:-left-[10px] peer-checked:-top-[10px] items-center flex"/>
      </label>
    </div>
  );
};

export default Checkbox;