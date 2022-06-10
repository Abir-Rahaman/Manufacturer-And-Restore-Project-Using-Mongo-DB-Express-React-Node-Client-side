import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
  } from "react-router-dom";
import Loading from '../Shared/Loading';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';


const RequireAdmin = ({children}) => {
    const location = useLocation()
    const [user,loading] = useAuthState(auth)

    if(loading){
       return <Loading></Loading>
    }
    
    if (!user) {
     signOut(auth)
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>
      }
    
    return children;
};

export default RequireAdmin;