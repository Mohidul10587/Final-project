import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login'
import Footer from './Pages/Shared/Footer';
import Appointment from './Pages/Appoinment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import UpdatePassword from './Pages/Login/UpdatePassword';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <div className='px-8'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='/updatePassword' element={<UpdatePassword></UpdatePassword>}></Route>



        </Routes>
        <ToastContainer />
      </div>

      <Footer></Footer>

    </div>
  );
}

export default App;
