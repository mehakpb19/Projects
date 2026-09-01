import { Route,  Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menwear from './components/Menwear';
import Womenwear from './components/Womenwear';
import Jewelery from './components/Jewelery';
import Electronics from './components/Electronics';
import Chart from './components/Chart';

const App = () => {
  return (
    <div className='h-screen'>
    <Navbar/>        
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Men-clothing' element={<Menwear/>}/>
        <Route path='/Women-clothing' element={<Womenwear/>}/>
        <Route path='/Jewelery' element={<Jewelery/>}/>
        <Route path='/Electronics' element={<Electronics/>}/>
        <Route path='/Chart' element={<Chart/>}/>
    </Routes>
    </div>


    </div>
  )
}

export default App
