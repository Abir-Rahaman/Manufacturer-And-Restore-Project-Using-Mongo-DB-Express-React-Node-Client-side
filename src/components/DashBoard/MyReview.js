import React from 'react';
import { useForm } from 'react-hook-form';


const MyReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit =async data => {
        // console.log(data);
        const Review ={
            name:data.name,
            description:data.description,
            ratings:data.ratings
        }
        console.log(Review);
        fetch('https://ancient-badlands-88778.herokuapp.com/Review',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(Review)
                })
                .then(res=> res.json())
                .then(inserted => {
                    console.log('done',inserted);
                })

    }
    return (
        <div className="w-full flex justify-center ">
            <form className='w-80' onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text"> Your Name </span>
    </label>
    <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full max-w-xs rounded-full input-primary"
        {...register("name", {
            required: {
                value: true,
                message: ' Name is Required'
            },
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text"> What You Want To say About Us </span>
    </label>
    <textarea
        type="text"
        placeholder="Description"
        className="textarea textarea-primary w-full rounded-full"
        {...register("description", {
            required: {
                value: true,
                message: 'Description is Required'
            },
        })}
    />
    <label className="label">
        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text"> Provide Honest Ratings </span>
    </label>
    <input
        type="text"
        placeholder="Ratings"
        className="input input-bordered w-full max-w-xs rounded-full input-primary"
        {...register("ratings", {
            required: {
                value: true,
                message: ' Minimum Quantity is Required'
            },
        })}
    />
    <label className="label">
        {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
    </label>
    <input className='btn btn-primary outline-0 bg-primary  w-full max-w-xs text-white  rounded-full mt-4' type="submit" value="Add Review" />

            </div>

        </form>
        </div>
    );
};

export default MyReview;