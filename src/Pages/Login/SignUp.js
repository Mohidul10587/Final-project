import React from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';
const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [updateProfile, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);

    if (loading || gLoading) return <div className='flex justify-center items-center h-screen'> <Loading></Loading>
    </div>

    let firebaseError;

    if (error || gError || updateError) {
        firebaseError = <small className='text-red-500'>{error?.message || gError?.message || updateError?.message}</small>
    }

    if (token) {
        navigate(from, { replace: true });
    }
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });

    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input

                                type="text"
                                placeholder="Name"
                                className="input input-bordered border-black w-full max-w-xs"

                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'This is required field'
                                    }

                                })} />

                            <label className="label">

                                {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name?.message}</span>}

                            </label>

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input

                                type="email"
                                placeholder="Email"
                                className="input input-bordered border-black w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'This is required field'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'This is wrong email'
                                    }
                                })} />

                            <label className="label">

                                {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email?.message}</span>}
                            </label>

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input

                                type="password"
                                placeholder="password"
                                className="input input-bordered border-black w-full max-w-xs"

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'This is password required field'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters'
                                    }
                                })} />

                            <label className="label">

                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password?.message}</span>}
                            </label>

                        </div>
                        {firebaseError}
                        <button
                            type="submit"
                            className="btn btn-outline w-full">Submit</button>


                    </form>
                    <small>Already have an account<Link className='text-primary ml-4' to='/logIn'>Go to Login</Link></small>
                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with google</button>


                </div>
            </div>
        </div>
    )
}

export default SignUp