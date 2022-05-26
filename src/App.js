import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer';
import Nav from './components/Shared/Nav';
import SignIn from './components/SignIn/SignIn';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './components/DashBoard/DashBoard';
import MyOrder from './components/DashBoard/MyOrder';
import MyReview from './components/DashBoard/MyReview';
import AllUsers from './components/DashBoard/AllUsers';
import RequireAdmin from './components/RequireAuth/RequireAdmin';
import AddParts from './components/DashBoard/AddParts';
import Payment from './components/DashBoard/Payment';
import MyProfile from './components/DashBoard/MyProfile';


function App() {
  return (
    <div className="">
     <Nav></Nav>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/computer/:id' element={<RequireAuth> <Booking></Booking></RequireAuth>}></Route>  
       <Route path='/dashboard' element={<RequireAuth> <DashBoard></DashBoard></RequireAuth>}>
         <Route index element={<MyOrder></MyOrder>}></Route>
         <Route  path='review' element={<MyReview></MyReview>}></Route>
         <Route  path='profile' element={<MyProfile></MyProfile>}></Route>
         <Route  path='payment/:id' element={<Payment></Payment>}></Route>
         <Route  path='user' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
         <Route  path='parts' element={<RequireAdmin><AddParts></AddParts></RequireAdmin>}></Route>
        </Route>  
       <Route path="/signIn" element={<SignIn />} />
       <Route path="/login" element={<LogIn />} />
     </Routes>
     <ToastContainer />
     <Footer></Footer>
    
    </div>
  );
}

export default App;
