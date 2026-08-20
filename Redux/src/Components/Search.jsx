import { useState } from 'react'
import { Search } from 'lucide-react';
import { useSelector ,useDispatch } from 'react-redux';
import { GetdatabyKeyword } from '../redux/getdataSlice';

const Searchcom = () => {
    const [Input, setInput] = useState("")
    const dispatch = useDispatch();
   const selectorName = useSelector((state) => state.data.value)
    console.log(selectorName);
    
  return (
    <div className='relative mt-2'>
        <input className='outline-none w-100 py-2 rounded-full bg-gray-700 px-4' type="text" value={Input} placeholder='Search Photos and GIF' onChange={(e)=>{
            setInput(e.target.value)
        }}/>
        <button className='active:scale-95 bg-blue-600 p-2 rounded-full absolute left-full top-1/2 -translate-y-1/2 -translate-x-full'onClick={()=>{
          dispatch(GetdatabyKeyword())
          
        }} ><Search/></button>
    </div>
  )
}
export default Searchcom