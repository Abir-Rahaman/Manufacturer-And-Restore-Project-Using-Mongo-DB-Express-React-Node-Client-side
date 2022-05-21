import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Shared/Nav';

function App() {
  return (
    <div className="">
     <Nav></Nav>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
     </Routes>
    </div>
  );
}

export default App;
