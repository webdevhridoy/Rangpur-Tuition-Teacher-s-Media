import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import loginImage from '../../../assest/login.png';
import { authContext } from '../../../Context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user, googleProviderLogin, createUser, updateUser } = useContext(authContext);
    // const [loginError, setLoginError] = useState('');

    const handleLogin = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const profile = {
                    displayName: data.name
                };
                updateUser(profile)
                    .then(() => { })
                    .then(error => console.error(error));
                const usersInfo = {
                    name: data.name,
                    email: data.email,
                    role: data.role,
                    status: 'unverified'
                };
                console.log(usersInfo);
            })

            .catch(error => {
                console.error(error);
            });
    };

    const handleGoogleSign = () => {
        googleProviderLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            });
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
            <div className='w-11/12 mx-auto md:w-1/2 md:p-20 md:h-screen flex justify-evenly items-center flex-col'>
                <div>
                    {/* <div className='flex justify-center items-center pb-5'>
                        <Link to='/'>
                            <img className='w-64 md:w-72 md:pb-10 py-5' src={logo} alt="" />
                        </Link>
                    </div> */}
                    <h2 className='text-4xl font-bold text-primary'>Welcome!</h2>
                    <h5 className='text-2xl font-bold text-textColor mt-5'>It’s really nice to see you</h5>
                </div>
                <div>
                    <div className='m-10'>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            {/* Name field */}
                            <div className="form-control w-full  mt-2">
                                <input type='text'
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Your Name" className="input input-bordered w-full my-1" />
                                {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                            </div>

                            {/* email field */}
                            <div className="form-control w-full  mt-2">
                                <input type='email'
                                    {...register("email", { required: "Email Address is required" })}
                                    placeholder="Your Email" className="input input-bordered w-full my-1" />
                                {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                            </div>

                            {/* password field */}
                            <div className="form-control w-full  mt-2">
                                <input
                                    {...register("password", {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password should be 6 characters or longer' }
                                    })}
                                    type="password" placeholder="Your Password" className="input input-bordered w-full my-1" />
                                {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                            </div>

                            {/* Instructor & Student option */}
                            <div className="form-control w-full my-5">
                                <div className='flex justify-start items-center'>
                                    <div className='flex justify-center items-center'>
                                        <input {...register('role')}
                                            id="user_type_instructor" type="radio" className="radio radio-primary" value="instructor" />
                                        <label className='ml-2'
                                            htmlFor="user_type_instructor">Instructor</label>
                                    </div>
                                    <div className="ml-5 flex justify-center items-center">
                                        <input {...register('role')}
                                            id="user_type_student" type="radio" className="radio radio-primary" value="student" />
                                        <label className='ml-2'
                                            htmlFor="user_type_student">Student</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className=" text-white rounded-lg btn-md w-full mt-5 bg-accent flex justify-center items-center hover:bg-secondary duration-300">
                                    <span className='text-lg'>Join Now</span>
                                    <span className='ml-2 text-lg'><BsArrowRight /></span>
                                </button>
                            </div>
                            <div className="form-control py-3">
                                <label className="cursor-pointer label flex justify-start items-center">
                                    <input {...register('checkbox')}
                                        type="checkbox" className="checkbox checkbox-primary" />
                                    <span className="label-text text-base text-gray-600 ml-2">I have read and agree to all <Link className='text-base text-blue-600 hover:underline'>Terms & conditions</Link>
                                    </span>

                                </label>
                            </div>
                            <div className="divider text-xl text-gray-500 font-bold">OR</div>
                            <div onClick={handleGoogleSign} className="flex justify-center items-center border-2 rounded-md p-3 cursor-pointer hover:bg-gray-50">
                                <span className='w-6 mr-2'>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g>
                                    </svg>
                                </span>
                                <span>
                                    Sign in with Google
                                </span>
                            </div>
                            <div className="flex justify-between items-center my-2">
                                <Link to='/login' className='text-base text-primary font-bold hover:underline'>Sign in</Link>
                                <Link className='text-base text-gray-500 hover:underline'>Lost password?</Link>
                            </div>
                        </form>
                        {/* <div>
                            {loginError && <p className='text-red-600'> {loginError}</p>}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;