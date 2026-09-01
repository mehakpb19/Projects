import { useEffect } from "react";
import { getdata } from "../redux/api";
import { setdata } from "../redux/dataslice";
import { useDispatch, useSelector } from "react-redux";
import Card from './Card';

const Home = () => {
  const dispatch = useDispatch();
  
  const {data} = useSelector((state) => state.data);
  console.log(data);
  
  useEffect(() => {
    const fnc=    async ()=> {
      const data = await getdata();
      dispatch(setdata(data));
    }
    fnc()
  }, []);
  return <div className="grid gap-5  ">
    {data.map((e)=>{
      return <Card key={e.title} obj={e}/>
    })}
  </div>
};

export default Home;
