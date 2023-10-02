import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { auth } from '../../firebase/config';
import { GooglePopOut } from '../../components/auth/GooglePopOut';

const formSchema = z
.object({
    name: z.string().min(1, 'Name is required')
            .max(50, "The name can have at most 50 charcters"),
    email: z.string().min(1, 'Email is required')
    .email('The Email should be Valid')
    .min(8, "Email needs to have 8 or more characters")
    .max(100, "Email can not pass 100 characters"),
    // Password
    password: z.string().min(1, 'Password is required')
    .min(8, "Password must have 8 or more characters") 
});
type SignUpSchemaType = z.infer<typeof formSchema>;

export const SignUp = () => {

    const navigate = useNavigate();

    // (React Hook Form) Hook to handle Form
    const { register, handleSubmit, formState: {errors} } = useForm<SignUpSchemaType>({resolver: zodResolver(formSchema)});
    
    // Handle Form
    const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
        const user = await createUserWithEmailAndPassword(auth, data.email, data.password)
        if(user){
            navigate('/best-selling');
        };
    };

    return(
        <div className="signup-main-container">
            <div className="signup-card-register">
                <h1 className="signup-card-h1">
                    Register
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="signup-card-form-container">
                        <span className="signup-card-form-label">Name</span>
                        <input 
                            type="text" 
                            className='signup-card-form-input'
                            {...register('name')}
                        />
                        {/* Error Message */}
                        {errors.name && 
                            <span className='signup-card-form-input-error'>{errors.name.message}</span> 
                        }
                    </div>
                    <div className="signup-card-form-container">
                        <span className="signup-card-form-label">Email</span>
                        <input 
                            type="text" 
                            className='signup-card-form-input'
                            {...register('email')}
                        />
                        {errors.name && 
                            <span className='signup-card-form-input-error'>{errors.email?.message}</span> 
                        }
                    </div>
                    <div className="signup-card-form-container">
                        <span className="signup-card-form-label">Password</span>
                        <input 
                            type="password"
                            className='signup-card-form-input'
                            {...register('password')}
                        />
                        {errors.name && 
                            <span className='signup-card-form-input-error'>{errors.password?.message}</span> 
                        }
                    </div>
                    <div className="signup-card-form-ways">
                        <button className="signup-card-form-button">
                            Sign Up
                        </button>
                        <div className="signup-card-form-redirect-login">
                            <span>
                                Have an Account? 
                                <Link className='signin-card-form-redirect-link' to='/signin'> Sign In <BsArrowRightShort style={{position: "relative", top:"3px"}} /></Link>
                            </span>
                        </div>
                    </div>
                </form>
                <GooglePopOut />
            </div>
        </div>
    )
}


