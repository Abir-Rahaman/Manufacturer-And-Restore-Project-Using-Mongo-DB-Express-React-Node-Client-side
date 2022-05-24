import React from 'react';
import { toast } from 'react-toastify';

const RowUser = ({user,refetch,index}) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
                else{
                    refetch();
                    toast.error('Already admin');
                }

            })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{ role !== 'admin' && <button onClick={makeAdmin} class="btn btn-primary btn-xs">Make Admin</button>}</td>
        <td><button class="btn  btn-error btn-xs">Remove User</button></td>
    </tr>
    );
};

export default RowUser;