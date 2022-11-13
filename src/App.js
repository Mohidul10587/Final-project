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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Review from './Pages/Review/Review';
import Contact from './Pages/Contact/Contact';
import AddDoctor from './Pages/Dashboard/AddDoctor';


function App() {
  return (

    <div>
      <Navbar></Navbar>
      <div className='px-8'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/appointment' element={

            <RequireAuth>
              <Appointment>
              </Appointment>
            </RequireAuth>}>
          </Route>


          <Route path='dashboard' element={<RequireAuth><Dashboard> </Dashboard></RequireAuth>}>
            <Route index='myDashboard' element={<MyAppointments></MyAppointments>}></Route>
            <Route path='myReview' element={<MyReview></MyReview>}></Route>
            <Route path='myHistory' element={<MyHistory></MyHistory>}></Route>
            <Route path='users' element={<RequireAdmin> <AllUsers></AllUsers></RequireAdmin>}></Route>
            <Route path='addDoctor' element={<RequireAdmin> <AddDoctor></AddDoctor></RequireAdmin>}></Route>


          </Route>

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
