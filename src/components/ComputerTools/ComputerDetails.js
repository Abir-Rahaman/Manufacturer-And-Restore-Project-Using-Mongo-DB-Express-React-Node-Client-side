import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComputerDetails = ({computer}) => {
    const navigate = useNavigate()
    const {_id,name,picture,price,minimum,quantity,description,} = computer;
    const navigateToUpdate = id =>{
        navigate(`/computer/${id}`)
    }

    return (
        <div class="card w-96 bg-base-100 shadow-2xl ">
            <figure class="px-10 pt-10">
                <img src={picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title"> {name}</h2>
                <p className='font-bold'> Minimum Order quantity :{minimum}</p>
                <p className='font-bold'>  available quantity :{quantity} </p>
                <p className='font-bold'> <span className='text-primary'> Information:</span>  <br />{description} </p>
                <p className='font-bold'>  Price ${price}  </p>
                <div class="card-actions">
                <button onClick={()=>navigateToUpdate(_id)} class="btn btn-primary">Book Now</button>
            </div>
        </div>
        </div>
    );
};

export default ComputerDetails;