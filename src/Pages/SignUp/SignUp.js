import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginimg from '../../assets/images/login.gif'
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
const SignUp = () => {
    const { createUser, providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                toast.success('Successfully Login', { autoClose: 3000 })
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //userCreate
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Successfully Login', { autoClose: 3000 })
                console.log(user)
                form.reset();
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero w-full  ">
            <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={loginimg} alt='' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-10">
                    <h1 className="text-5xl text-center font-bold">Sign up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning  bg-orange-600" type="submit" value='Sign up' />

                        </div>
                    </form>
                    <p className='text-center'>Already have an account<Link className='text-orange-600 font-bold' to='/login'>Log in</Link></p>
                    <button onClick={handleGoogleSignIn} className='mt-3 btn btn-outline btn-warning'><FcGoogle className='mx-2 w-6 h-6'></FcGoogle>Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;