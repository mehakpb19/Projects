import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 pr-10 pl-10 border-b-2">
            <h1 className="text-4xl">Company</h1>
        <div className="flex gap-5">
            <Link className="underline" to='/'>Home</Link>
            <Link className="underline" to='/contact' >   Contact</Link>
            <Link className="underline" to='/aboutus' >   About us</Link>
        </div>
    </nav>
)
}

export default Navbar