
import { Link, Outlet } from 'react-router-dom';
const Aboutus = () => {
  return (
    <div  className="text-7xl absolute top-1/2 left-1/2 -translate-1/2">Aboutus
    <Link to="mon">mon</Link>
    <Outlet/>
    </div>
  )
}

export default Aboutus