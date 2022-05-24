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
            <h1 className='text-xl font-bold text-primary  text-center my-14'> My Order : {bookings.length} </h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Client Name</th>
                        <th>Client Email</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking,index)=><tr>
                                <th>{index+1}</th>
                                <td> {user.displayName} </td>
                                <td>{user.email} </td>
                                <td> {booking.productName} </td>
                                <td> {booking.productPrice} </td>
                            </tr>)
                        }
                  
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyOrder;