import { Play } from "lucide-react"
import { Link, useNavigate } from "react-router"

const Card = () => {
    const navigate = useNavigate();
  return (
    <Link to={'/song/song'} className=" group h-[70%] w-[21%] relative flex flex-col items-center justify-center bg-none border rounded-2xl ">
      <div  className="h-[95%] w-[95%] bg-white/10 blur-md rounded-2xl z-0 absolute"></div>
        <img className="z-1 rounded-2xl w-[92%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsw9ob2HFGka8BiXpz6OVao1G_M7uD_JawjuViL_9s8SL4_kS_MLeTttQ&s=10" alt="" />
    <div className="flex-col flex relative leading-0 w-full px-5">
        <h1 className="text-2xl">Titel</h1>
        <p className="text-gray-300 mb-4 mt-2 ">singer</p>
        <button onClick={() => {
            navigate('/song/song');
        }} className=" cursor-pointer invisible group-hover:visible  transition-transform duration-5 ease-in-out  absolute left-[95%] -translate-x-full translate-y-[-30%]  group-hover:-translate-y-1/2 top-1/2  bg-[#3BE477] p-3 rounded-3xl "><Play/></button>
    </div>
    </Link>
  )
}

export default Card
