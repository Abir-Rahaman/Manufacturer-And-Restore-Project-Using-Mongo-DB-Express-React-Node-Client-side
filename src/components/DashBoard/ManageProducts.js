import React, { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';
import ManageProductsDetails from './ManageProductsDetails';

const ManageProducts = () => {
    const [allcomputers,setAllComputers] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/allComputer")
        .then(res => res.json())
        .then(data => setAllComputers(data));
    },[])
    const [deleteProducts ,setDeleteProducts]=useState(null)
    return (
       
        <div class="mt-10">
            <h4 className='text-center text-red-700 font-bold'> After Delete Refresh The WebSite </h4>
            <table class="table table-zebra w-full">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th> Minimum Order Quantity  </th>
                    <th> Available Quantity </th>  
                    <th> Per Product Price </th>  
                    <th> Product Description </th>  
                    <th> Admin Action</th>  
                </tr>
                </thead>
                <tbody className=''>
                        <div className="w-80">
                        {
                            allcomputers.map((computer,index)=><ManageProductsDetails
                            key={computer._id}
                            computer={computer}
                            index={index}
                            setDeleteProducts={setDeleteProducts}
                            ></ManageProductsDetails>)
                        }
                        </div>
              
                </tbody>
            </table>
            {deleteProducts && <DeleteModal></DeleteModal>}
            </div>
    
    );
};

export default ManageProducts;