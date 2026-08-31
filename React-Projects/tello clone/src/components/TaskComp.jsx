import Checkbox from "./Checkbox"
import { useSelector } from "react-redux";

const TaskComp = (props) => {
  const { Sections } = useSelector((state) => state.Taskes); 
  console.log(Sections);
  
  return (
    <div className=" bg-black/85 min-h-12 min-w-50 w-full flex text-white justify-between gap-5 px-3 items-center rounded-2xl">
            <Checkbox ischecked={Sections[props.section][props.task].isDone} section={props.section} task={props.task} />
            <h1>{props.task}</h1>
          </div>
  )
}

export default TaskComp
