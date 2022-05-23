import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Footer from './components/Shared/Footer';
import Nav from './components/Shared/Nav';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="">
     <Nav></Nav>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path="signIn" element={<SignIn />} />
       <Route path="logIn" element={<LogIn />} />
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
