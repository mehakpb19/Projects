// import { useSelector } from "react-redux";

import {  useSelector } from "react-redux";
import Card from "./Card";

const Menwear = () => {
  
  const {data} = useSelector((state) => state.data);
  const newdata = data.filter(e=>{
  if (e.category === "men's clothing") {
    
    return e
  }
  }) 
return <div className="grid gap-5  ">
    {newdata.map((e)=>{
      return <Card key={e.title} obj={e}/>
    })}
  </div>
};

export default Menwear;
