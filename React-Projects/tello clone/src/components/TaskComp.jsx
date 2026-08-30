import Checkbox from "./Checkbox"

const TaskComp = ({task}) => {
  return (
    <div className=" bg-black/85 min-h-12 min-w-50 w-full flex text-white justify-between gap-5 px-3 items-center rounded-2xl">
            <Checkbox/>
            <h1>{task}</h1>
          </div>
  )
}

export default TaskComp
