import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from './../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();
   
    const onSubmit =async data => {
        const ProfileData ={
            name:user?.displayName,
            email:user?.email,
            address :data?.address,
            number:data?.number,
            linkedin:data?.linkedin
        }
       
        fetch('https://ancient-badlands-88778.herokuapp.com/profile',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(ProfileData)
        })
        .then(res=> res.json())
        .then(inserted => {
            console.log('done',inserted);
        })

    }
    return (
        <div className='w-full flex justify-center'>
            <form className='w-80' onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full ">
    <label className="label">
        <span className="label-text"> Your Name</span>
    </label>
    <input disabled readOnly value={user?.displayName || "not found"}
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full max-w-xs rounded-full input-primary"
        {...register("name", {
           
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text"> Your Email </span>
    </label>
    <input disabled readOnly value={user?.email || "not found"}
        type="email"
        placeholder="Your Email "
        className="input input-bordered w-full max-w-xs rounded-full input-primary"
        {...register("email", {
            
        })}
    />
    <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">your Permanent Address</span>
    </label>
    <input
        type="text"
        placeholder="your Permanent Address"
        className="input input-bordered w-full max-w-xs text-primary rounded-full input-primary"
        {...register("address", {
            required: {
                value: true,
                message: 'your Permanent Address is Required'
            },
        })}
    />
    <label className="label">
        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text"> Your Valid Contact Number </span>
    </label>
    <input
        type="text"
        placeholder="Your Valid Contact Number"
        className="input input-bordered w-full max-w-xs input-primary rounded-full"
        {...register("number", {
            required: {
                value: true,
                message: 'Your Valid Contact Number Required'
            },
        })}
    />
    <label className="label">
        {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text"> Your Linkedin Profile </span>
    </label>
    <input
        type="text"
        placeholder="Your Linkedin Profile  "
        className="input input-primary w-full rounded-full"
        {...register("linkedin", {
            required: {
                value: true,
                message: 'Your Linkedin Profile  is Required'
            },
        })}
    />
    <label className="label">
        {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
    </label>
</div>



<input className='btn btn-primary outline-0 bg-primary  w-full max-w-xs text-white  rounded-full mt-4' type="submit" value=" Save Info" />
</form>
        </div>
    );
};

export default MyProfile;