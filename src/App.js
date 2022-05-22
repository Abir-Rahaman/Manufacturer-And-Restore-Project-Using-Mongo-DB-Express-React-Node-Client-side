import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Nav from './components/Shared/Nav';

function App() {
  return (
    <div className="">
     <Nav></Nav>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
