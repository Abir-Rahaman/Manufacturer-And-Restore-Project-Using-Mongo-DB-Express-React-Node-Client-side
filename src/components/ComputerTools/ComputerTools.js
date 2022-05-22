import React, { useEffect, useState } from 'react';
import ComputerDetails from './ComputerDetails';

const ComputerTools = () => {
    const [computers,setComputers] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/computer")
        .then(res => res.json())
        .then(data => setComputers(data));
    },[])
    return (
        <div className=''>
        <h1 className='text-center text-3xl font-bold mt-5 pt-5' > <span className='banner'>Some Products From Our manufacturers Outlet  </span> </h1>
        <div className="mt-5 ml-20 grid lg:grid-cols-3  gap-8 lg:px-32 ">
        {
               computers.map( computer => <ComputerDetails key={computer._id} computer={computer} > </ComputerDetails>  )
         }      

        </div>
    </div>
    );
};

export default ComputerTools;