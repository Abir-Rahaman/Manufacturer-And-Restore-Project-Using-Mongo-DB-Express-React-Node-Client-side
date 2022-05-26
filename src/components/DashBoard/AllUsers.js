import React, { useEffect, useState } from 'react';
import RowUser from './RowUser'


const AllUsers = () => {
  
    const [users , setUsers] =useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/user")
        .then(res=> res.json())
        .then(data => setUsers(data))
    },[])
   

    return (
        <div>
        <h1 className='text-xl font-bold text-primary  text-center my-14'> My Order : {users.length} </h1>
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                {/* <!-- head --> */}
                <thead>
                <tr>
                    <th></th>
                    <th>Client Email</th>
                    <th> Admin Action </th>
                    <th>Admin Action </th>
                </tr>
                </thead>
                <tbody>
                         {
                            users.map((user,index)=><RowUser
                            key={user._id}
                            user={user}
                            index={index}
                            ></RowUser>)
                        }
                    
              
                </tbody>
            </table>
            </div>
    </div>
    );
};

export default AllUsers;