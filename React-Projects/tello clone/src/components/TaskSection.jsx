import TaskComp from './TaskComp'

const TaskSection = () => {
  return (
   <div className="bg-black/80 h-fit px-4 flex flex-col items-center w-fit gap-2 rounded-2xl py-4">
    <h1 className='text-white'>Titel</h1>
    <div className='w-[90%] flex justify-center'>
    <input placeholder='Enter Task name' type="text" className=' text-xs h-10 my-2 mr-2 p-2 bg-black/60 text-white min-w-30 w-[80%] outline-none rounded-2xl'/>
    <button className='active:scale-95 border h-10 my-2 p-2 rounded-2xl bg-emerald-600 border-emerald-600 text-white whitespace-nowrap'>Add Task</button>
    </div>
          <TaskComp task={'asdf'}/>
          <TaskComp task={'task2'}/>
        </div>
  )
}

export default TaskSection
