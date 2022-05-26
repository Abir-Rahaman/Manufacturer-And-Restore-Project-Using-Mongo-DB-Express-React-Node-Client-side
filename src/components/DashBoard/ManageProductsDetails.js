import React from 'react';

const ManageProductsDetails = ({computer,index}) => {
    const {name,minimum,quantity,description,price} = computer;
    return (
        <tr className='w-80'>
        <th>{index+1}</th>
        <td>{name}</td>  
        <td>{minimum}</td>  
        <td>{quantity}</td>  
        <td>{price}</td>  
        <td>{description}</td>  
        <td><button class="btn btn-sm bg-red-700 ">Delete</button></td>  

   
    </tr>
    );
};

export default ManageProductsDetails;