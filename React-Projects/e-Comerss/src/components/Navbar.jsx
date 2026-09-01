import { Link } from "react-router";
import {  ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-black/80 text-white h-[10%] flex justify-between items-center p-5">
        <Link to="/" className="text-3xl">E-comarssss</Link>
        <div className="flex gap-5 items-center">
            <div className="flex gap-5">
            <Link to='/Men-clothing'>Men's clothing</Link>
            <Link to='/Women-clothing'>Women's clothing</Link>
            <Link to='/Jewelery'>Jewelery</Link>
            <Link to='/Electronics'>Electronics</Link>
        </div>
            <Link className="bg-white rounded-full p-2
            " to='/Chart'><ShoppingCart color="black"/></Link>
        </div>
    </div>  
  )
}

export default Navbar
