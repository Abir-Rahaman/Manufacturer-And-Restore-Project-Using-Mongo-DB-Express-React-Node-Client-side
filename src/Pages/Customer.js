import React from 'react';
import customer from '../Asset/center.png'
import call from '../Asset/call.png'
import location from '../Asset/location.png'
import email from '../Asset/email.png'
import wp from '../Asset/whatsapp.png'

const Customer = () => {
    return (
      <> 
        <h1 className='font-bold text-4xl text-center text-primary lg:ml-40 '>Contact Info</h1>
        <div class="card flex px-16">

        <div className="flex">
        <div className=" lg:w-3/6 flex-col-1  lg:flex">
        <figure><img className='hidden lg:block' src={customer} alt="customer"/></figure>
        </div>
        <div class="card-body lg:pl-24">
        <div className="lg:flex gap-36 ">
          <div className="">
          <div class="card w-96 bg-primary ">
            <div class="card-body">
              <h2 class="card-title text-white">Face-to-Face Support</h2>
              <small className='font-bold'>product is in warranty, we're here to help.</small>
              <small className='font-bold flex items-center gap-3 mt-3'> <img className='w-10' src={location} alt="" /> <button class="btn btn-wide rounded-full ">Find our all service center </button> </small>

            </div>
          </div>
          <div class="card w-96 bg-primary mt-16">
          <div class="card  bg-primary ">
            <div class="card-body">
              <h2 class="card-title text-white">Email Support</h2>
              <small className='font-bold flex items-center gap-3'><button class=" text-white"> <img className='w-10' src={email} alt="" /></button> computerHub@gmail.com <br /> </small>
              <small className='font-bold'>We'll respond within 24 hours of your request.</small>
            </div>
          </div>
          </div>
          </div>
          <div className="mt-16 lg:mt-0">
          <div class="card w-96 bg-primary">
            <div class="card-body">
              <h2 class="card-title text-white">24 Hours Phone (Bangladesh)</h2>
              <small className='font-bold flex items-center gap-3 mt-5'><button class=" text-white"> <img className='' src={call} alt="" /></button> 01701750168 </small>
              <small className='font-bold'>09:00 AM to 06:00 PM [Everyday] </small>
            </div>
          </div>
          <div class="card w-96 bg-primary  mt-16">
          <div class="card bg-primary">
            <div class="card-body">
              <h2 class="card-title text-white">WhatsApp Us</h2>
              <small className='font-bold flex items-center gap-3 mt-3'><button class=" text-white"> <img className='' src={wp} alt="" /></button> 01701750168 </small>
              <small className='font-bold'>09:00 AM to 06:00 PM [Everyday] </small>
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
      </>
    );
};

export default Customer;