import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer';
import Nav from './components/Shared/Nav';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="">
     <Nav></Nav>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/computer/:id' element={<RequireAuth> <Booking></Booking></RequireAuth>}></Route>  
       <Route path="/signIn" element={<SignIn />} />
       <Route path="/login" element={<LogIn />} />
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
