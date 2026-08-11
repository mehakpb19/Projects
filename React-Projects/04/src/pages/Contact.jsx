import { useNavigate } from "react-router-dom"

const Contact = () => {
  let navigate = useNavigate();
  return (
    <div  className="text-7xl absolute top-1/2 left-1/2 -translate-1/2" >Contact
    <button onClick={()=>{
      navigate(-1)
    }}>back</button></div>
  )
}

export default Contact