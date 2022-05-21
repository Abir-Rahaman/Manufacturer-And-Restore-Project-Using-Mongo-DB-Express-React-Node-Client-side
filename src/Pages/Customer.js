import React from 'react';
import customer from '../Asset/customer.jpg'

const Customer = () => {
    return (
        <div class="card  glass w-3/6 mx-auto  mt-28">
        <figure><img src={customer} alt="car!"/></figure>
        <div class="card-body">
          <h2 class=" text-3xl text-primary text-center font-bold"> Best Customer Service In Town </h2>
          <p>How to park your car at your garage?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    );
};

export default Customer;