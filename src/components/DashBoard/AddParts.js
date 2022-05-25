import React from 'react';
import { useForm } from 'react-hook-form';




const AddParts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageStorageKey='69fb380d3c03cfe1603dcae97afcc89a'
    const onSubmit =async data => {
        // console.log(data)
        const image = data.picture[0]
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url,{
            method:"POST",
            body: formData

        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const tools ={
                    picture:img,
                    name:data.name,
                    minimum:data.minimum,
                    quantity:data.quantity,
                    price:data.price,
                    description:data.description,
                }
                fetch('http://localhost:4000/tools',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(tools)
                })
                .then(res=> res.json())
                .then(inserted => {
                    console.log('done',inserted);
                })

            }
            
        })
   
  
     };
    return (
        <div className='shadow-2xl mt-14 w-full flex items-center justify-center pb-24 px-60'>
          <form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text"> Product Image</span>
    </label>
    <input
        type="file"
        placeholder="Add Product Image"
        className=""
        {...register("picture", {
            required: {
                value: true,
                message: ' Product Image is Required'
            },
        })}
    />
    <label className="label">
        {errors.picture?.type === 'required' && <span className="label-text-alt text-red-500">{errors.picture.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text"> Product Name</span>
    </label>
    <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full max-w-xs rounded-full input-primary"
        {...register("name", {
            required: {
                value: true,
                message: 'Product Name is Required'
            },
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text"> Minimum Quantity</span>
    </label>
    <input
        type="text"
        placeholder="Minimum Quantity"
        className="input input-bordered w-full max-w-xs rounded-full input-primary"
        {...register("minimum", {
            required: {
                value: true,
                message: ' Minimum Quantity is Required'
            },
        })}
    />
    <label className="label">
        {errors.minimum?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Available Quantity</span>
    </label>
    <input
        type="text"
        placeholder="Available Quantity"
        className="input input-bordered w-full max-w-xs text-primary rounded-full input-primary"
        {...register("quantity", {
            required: {
                value: true,
                message: 'Available Quantity is Required'
            },
        })}
    />
    <label className="label">
        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Product Price</span>
    </label>
    <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full max-w-xs input-primary rounded-full"
        {...register("price", {
            required: {
                value: true,
                message: 'Product Price Required'
            },
        })}
    />
    <label className="label">
        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text"> Product Description</span>
    </label>
    <textarea
        type="text"
        placeholder="Product Description"
        className="textarea textarea-primary w-full rounded-full"
        {...register("description", {
            required: {
                value: true,
                message: 'Product Description is Required'
            },
        })}
    />
    <label className="label">
        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
    </label>
</div>



<input className='btn btn-primary outline-0 bg-primary  w-full max-w-xs text-white  rounded-full mt-4' type="submit" value="Add New" />
</form>
        </div>
    );
};

export default AddParts;