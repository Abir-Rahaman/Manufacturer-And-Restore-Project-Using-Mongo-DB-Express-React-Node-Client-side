import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyOrder = () => {
    const [bookings ,setBookings] = useState([])
    const [user] = useAuthState(auth);
    useEffect(()=>{
    if(user){
            const url =`http://localhost:4000/booking?bookingEmail=${user.email}`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
        }
    },[user])
 
    return (
        <div>
            <h1> My Order : {bookings.length} </h1>
        </div>
    );
};

export default MyOrder;