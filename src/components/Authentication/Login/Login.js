import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { BsArrowRight } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assest/logo.png';
import loginImage from '../../../assest/login.png';
// import { authContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/AuthProvider';



const Login = () => {
    const { userSignIn, googleProviderLogin } = useContext(authContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (data) => {
        userSignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success('You have logged successfully');
            })
            .catch(err => console.error(err));
    };


    const handleGoogleSignIn = () => {
        googleProviderLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/');
                toast.success('You have registerd successfully7');
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className='flex justify-center md:flex-row flex-col items-center md:h-screen'>
            <div className='flex justify-center items-center w-full mx-auto md:w-1/2 md:p-20 p-5 md:h-screen bg-[#0A0F26]'>
                <div>
                    <div>
                        <img className='w-4/5 mx-auto' src={loginImage} alt="" />
                    </div>
                    <div className='pt-10'>
                        <h2 className='text-2xl md:text-4xl font-bold text-white'>Yes! we’re making progress</h2>
                        <h5 className='text-lg md:text-2xl font-semibold text-secondary md:mt-5'>every minute & every second</h5>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto md:w-1/2 md:p-20 md:h-screen'>
                <div>
                    <div className='flex justify-center items-center pb-5'>
                        <Link to='/'>
                            <img className='w-64 md:w-72 md:pb-10 py-5' src={logo} alt="" />
                        </Link>
                    </div>
                    <h2 className='text-4xl font-bold text-primary'>Welcome!</h2>
                    <h5 className='text-2xl font-bold text-textColor mt-5'>It’s really nice to see you</h5>
                </div>
                <div>
                    <div className='m-10'>
                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <div className="form-control w-full  mt-2">
                                <input type='email'
                                    {...register("email", { required: "Email Address is required" })}
                                    placeholder="Your Email" className="input input-bordered w-full my-1" />
                                {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full  mt-2">
                                <input
                                    {...register("password", {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password should be 6 characters or longer' }
                                    })}
                                    type="password" placeholder="Your Password" className="input input-bordered w-full my-1" />
                                {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                            </div>
                            <div>
                                <button type="submit" className=" text-white rounded-lg btn-md w-full mt-5 bg-accent flex justify-center items-center hover:bg-secondary duration-300">
                                    <span className='text-lg'>Submit</span>
                                    <span className='ml-2 text-lg'><BsArrowRight /></span>
                                </button>
                            </div>
                            <div className="divider text-xl text-gray-500 font-bold">OR</div>

                            <div onClick={handleGoogleSignIn} class="flex justify-center items-center border-2 rounded-md p-3 cursor-pointer hover:bg-gray-50">
                                <span className='w-6 mr-2'>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g>
                                    </svg>
                                </span>
                                <span>
                                    Sign in with Google
                                </span>
                            </div>
                            <div class="flex justify-between items-center my-2">
                                <Link to='/signup' className='text-base text-primary font-bold hover:underline'>Register today</Link>
                                <Link className='text-base text-gray-500 hover:underline'>Lost password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;