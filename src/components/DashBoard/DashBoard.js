import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from './../../hooks/useAdmin';

const DashBoard = () => {
  const [user]=useAuthState(auth)
  const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center mt-14" >
            <h2 className='text-4xl font-bold text-primary'> WellCome To Dashboard </h2>
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu  px-6 h-fit pt-6 w-80 mt-24 bg-base-300 items-center rounded-2xl lg:ml-12">

            <li  className='bg-primary w-full rounded-full text-white font-bold  mb-5'><a> <img src='{list}' alt="" /> Dashboard </a></li>
            <li  className='bg-black text-center text-white mb-6 w-full rounded-full  '><a>  <img src='' alt="" /> <Link to='/dashboard' > My Order </Link> </a></li>
            <li  className='bg-black text-white mb-6 w-full rounded-full  '><a>  <img src='' alt="" /> <Link to='/dashboard/review' > My Review </Link> </a></li>
    
            { admin && <>
              <li  className='bg-black text-white mb-6 w-full rounded-full  '><a>  <img src='' alt="" /> <Link to='/dashboard/user' > All Users </Link> </a></li>
              <li  className='bg-black text-white mb-6 w-full rounded-full  '><a>  <img src='' alt="" /> <Link to='/dashboard/parts' > Add Parts & Tools  </Link> </a></li>
            
            </>
            }
            
            </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;