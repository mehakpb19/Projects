"use client"

import Respons from '@/app/Components/Respons';
import { useState } from 'react';
import MsgSendingAction from '@/app/actions/MsgSending';

const Page = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  return (
    <div className='flex flex-col justify-between h-full'>
      <Respons respon={response} />
      <div className='h-15'>
        <input value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }} type="text" className='bg-black/30 h-full text-white outline-none p-3 w-100 border-2 rounded-4xl' placeholder='Type a message...' />
        <button onClick={async ()=>{
          const newResponse = await MsgSendingAction(input); 
    setResponse(newResponse); 
        }} className='hover:bg-blue-400 active:scale-95 bg-blue-500 text-black text-xl h-full px-5 rounded-4xl ' type="button">Send</button>
      </div>
    </div>
  )
}

export default Page
