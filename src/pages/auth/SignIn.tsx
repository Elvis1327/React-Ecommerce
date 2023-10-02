import React from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { BsArrowRightShort } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { auth } from '../../firebase/config';
import { GooglePopOut } from '../../components/auth/GooglePopOut';



const formSchema = z
.object({
    email: z.string().min(1, 'Email is required')
    .email('The Email should be Valid')
    .min(8, "Email needs to have 8 or more characters")
    .max(100, "Email can not pass 100 characters"),
    // Password
    password: z.string().min(1, 'Password is required')
    .min(8, "Password must have 8 or more characters") 
});
type SignUpSchemaType = z.infer<typeof formSchema>;

export const SignIn = () => {
    
    const navigate = useNavigate();

    // (React hook form) hook to handle form 
    const { register, handleSubmit, formState: {errors} } = useForm<SignUpSchemaType>({resolver: zodResolver(formSchema)});

    // handle Form
    const onSubmit:SubmitHandler<SignUpSchemaType> = async (data) => {
        const user = await signInWithEmailAndPassword(auth, data.email, data.password);
        navigate('/best-selling');
    };

    return(
        <div className="signin-main-container">
            <div className="signin-card-login">
                <h1 className='signin-card-h1'>
                    Login
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="signin-card-form-container">
                        <span className="signin-card-form-label">Email</span>
                        <input 
                            {...register('email')}
                            type="text"
                            className='signin-card-form-input'
                        />
                        {/* Error Message */}
                        {errors.email && 
                            <span className='signin-card-form-input-error'>{errors.email.message}</span> 
                        }
                    </div>
                    <div className="signin-card-form-container">
                        <span className="signin-card-form-label">Password</span>
                        <input 
                            {...register('password')}
                            type="password"
                            className='signin-card-form-input'
                        />
                        {/* Error Message */}
                        {errors.password && 
                            <span className='signin-card-form-input-error'>{errors.password.message}</span> 
                        } 
                    </div>
                    <div className="signin-card-form-ways">
                        <button className="signin-card-form-button">
                            Sign In
                        </button>
                        <div className="signin-card-form-redirect-register">
                            <span>
                                New Curstomer?  
                                 <Link className='signin-card-form-redirect-link' to="/signup"> Sign Up<BsArrowRightShort style={{position: "relative", top:"3px"}} /></Link> 
                            </span>
                        </div>
                    </div>
                </form>
                <GooglePopOut />
            </div>
        </div>
    )

}

