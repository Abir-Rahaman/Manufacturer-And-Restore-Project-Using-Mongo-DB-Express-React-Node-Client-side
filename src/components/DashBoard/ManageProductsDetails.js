import React from 'react';
import { toast } from 'react-toastify';

const ManageProductsDetails = ({computer,index}) => {
    const {_id,name,minimum,quantity,description,price} = computer;

    const handleDelete = id =>{
        fetch(`http://localhost:4000/tools/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast("deleted SuccessFully")
            }

        })
        
    }
    return (
        <tr className='w-80'>
        <th>{index+1}</th>
        <td>{name}</td>  
        <td>{minimum}</td>  
        <td>{quantity}</td>  
        <td>{price}</td>  
        <td>{description}</td>  
        {/* <td> <label onClick={()=>setDeleteProducts(computer)} for="deleteModal" class="btn btn-sm bg-red-700 ">Delete</label></td>   */}

        <td><button onClick={() => handleDelete(_id)} class="btn btn-sm bg-red-700 ">Delete</button></td>  

   
    </tr>
    );
};

export default ManageProductsDetails;