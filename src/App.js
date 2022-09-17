import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login'
import Footer from './Pages/Shared/Footer';
import Appointment from './Pages/Appoinment/Appointment';
function App() {
  return (

    <div>
      <Navbar></Navbar>
      <div className='px-8'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
<Footer></Footer>
      </div>
    </div>
  );
}

export default App;
