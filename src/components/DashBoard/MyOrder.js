import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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

                    <thead>
                    <tr>
                        <th></th>
                        <th>Client Name</th>
                        <th>Client Email</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th> Payment </th>
                        <th> Paid Done </th>
                        <th> Action </th>
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
                                <td> {(booking.productPrice && !booking.paid) && <Link to={`/dashboard/payment/${booking._id}`}> <button class="btn btn-sm rounded-full btn-primary bg-primary">Payment </button>
                                 </Link> } </td>
                                <td> {(booking.productPrice && booking.paid) && <button class="btn btn-sm rounded-full btn-success bg-success"> paid </button>
                                 } </td>
                                <td> {(booking.productPrice && !booking.paid) &&  <Link to={``}> <button class="btn btn-sm rounded-full bg-glass bg-red-500"> Cancel </button>
                                 </Link> } </td>
                            </tr>)
                        }
                  
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyOrder;