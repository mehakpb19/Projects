import Navbar from "./components/Navbar"
import{ Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Aboutus from "./pages/Aboutus"

const App = () => {
  return (
    <div className="bg-black text-white h-screen">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>

    </div>
  )
}

export default App