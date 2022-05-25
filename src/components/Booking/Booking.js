import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom';
import bgsell from '../../Asset/sell-bg.jpg'
import { toast } from 'react-toastify';


const Booking = () => {
    const {id} = useParams();
    const [ tools, setTools] = useState({});
    const {name,price,quantity,minimum,_id} = tools;
    useEffect(()=>{
        const url=`http://localhost:4000/computer/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTools(data));
    },[]) 
    // console.log(computer);
    const [user] = useAuthState(auth)
    const handleBook = e =>{
        e.preventDefault();
        const booking = {
            productId:_id,
            productName:name,
            bookingEmail:user.email,
            UserName:user.displayName,
            productPrice:price,
            productQuantity:quantity,
            minimumQuantity:minimum
        }
        fetch('http://localhost:4000/booking', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("done")
                 
            });
    
    }
    return (
        <div className='w-full' style={{
            background: `url(${bgsell})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'1910px 900px'
        }} >
           
            <form onSubmit={handleBook} className='grid grid-cols-1 gap-2 justify-items-center  w-full py-20 lg:pr-96'>
            <label className="label">
                    <span className="label-text font-bold text-primary"> Buyer Name </span>
                </label>
                    <input type="text" name='name' disabled readOnly value={user?.displayName || "not found"} className="input input-bordered input-info w-full max-w-xs rounded-full " />
                    <label className="label">
                    <span className="label-text font-bold text-primary">Buyer Email</span>
                </label>
                    <input type="email" name='email' disabled readOnly value={user?.email || "not found"} className="input input-bordered input-info w-full max-w-xs rounded-full " />
                    <label className="label">
                    <span className="label-text font-bold text-primary">Product Id</span>
                </label>
                    <input type="email" name='email' disabled readOnly value={_id || "not found"} className="input input-bordered input-info w-full max-w-xs rounded-full " />
                    <label className="label">
                    <span className="label-text font-bold text-primary"> Product Name </span>
                </label>
                    <input type="email" name='bookingName' disabled readOnly value={name || "not found"} className="input input-bordered input-info w-full max-w-xs rounded-full " />
                    <label className="label">
                    <span className="label-text font-bold text-primary">Product Price</span>
                </label>
                    <input type="text" name='bookingPrice' disabled readOnly value={price|| "not found"} className="input input-bordered input-info w-full max-w-xs rounded-full " />

                    <input type="submit" value='purchase' placeholder="Type here" className="btn btn-primary btn-wide mt-3 text-white rounded-full " /> 
                    </form>
            
            </div>
      
    );
};

export default Booking;