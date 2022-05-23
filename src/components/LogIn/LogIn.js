import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import fb from '../../Asset/facebook.png'
import login from '../../Asset/signin.png'
import tag from '../../Asset/user.png'


const LogIn = () => {
   
    let navigate = useNavigate();
    let location = useLocation();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let from = location.state?.from?.pathname || "/";
    useEffect( () =>{
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [])

    let customError;

    if(loading || googleLoading){
        return <Loading></Loading>
    }
    if(error || googleError){
        customError= <p className='font-bold text-red-800 text-center'> <small> {error?.message || googleError?.message} </small> </p>

    }
    

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email , data.password);
    };
 
   
   
    return (
        <div className="flex justify-center lg:mr-64 lg:py-20">
            <img src={login} alt="" />
            <div class="card  form-section">
            <div class="card-body mx-auto w-full">
            <h2 class="text-center font-bold text-primary text-4xl"> <img className='mx-auto' src={tag} alt="" />  </h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs rounded-full"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs rounded-full"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                {customError}
                <input className='btn btn-primary outline-0 bg-primary  w-full max-w-xs text-white  rounded-full mt-4' type="submit" value="Login" />
                </form>
               
                <p className='font-bold text-center'>New to Portal? <Link to="/SignIn" ><span className='text-primary'> Create An Account</span> </Link> </p>
                <div class="divider">OR</div>
            
           <button onClick={()=>signInWithGoogle()}    className='btn flex justify-between  px-5 bg-white btn-primary text-primary  w-full max-w-xs rounded-full '>  <img className='' src={fb} alt="" /> <small className=' text-primary pr-12 '>Continue with Google</small> </button>
            </div>
          </div>
        </div>
    );
};

export default LogIn;