import React from 'react';
import useTools from '../../hooks/useTools';
import ManageProductsDetails from './ManageProductsDetails';

const ManageProducts = () => {
    const {computers} =useTools();
    return (
       
        <div class="mt-10">
            <table class="table table-zebra w-full">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th> Minimum Order Quantity  </th>
                    <th> Available Quantity </th>  
                    <th> Per Product Price </th>  
                    <th> Product Description </th>  
                    <th> Admin Action </th>  
                </tr>
                </thead>
                <tbody className=''>
                        <div className="w-80">
                        {
                            computers.map((computer,index)=><ManageProductsDetails
                            key={computer._id}
                            computer={computer}
                            index={index}
                            ></ManageProductsDetails>)
                        }
                        </div>
              
                </tbody>
            </table>
            </div>
    
    );
};

export default ManageProducts;