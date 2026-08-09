import { useState } from "react";
import Form from './components/Form';
import Notes from './components/Notes';

const App = () => {
  const [NotesArr, setNotesArr] = useState([])
  return (
    <div className="h-screen w-full bg-black text-white lg:flex">
        
        <Form SetArr={setNotesArr} Arr={NotesArr}/>      
        
        <Notes Arr={NotesArr} SetArr={setNotesArr}/>
    </div>
  );
};

export default App;
