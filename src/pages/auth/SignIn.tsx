import React, { ChangeEvent, FormEvent, useState } from 'react';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/config';
import googleImage from '../../../public/googlepng.png';

export const SignIn = () => {

    // Form Values Input
    const defaultFormData = {
        email: "",
        password: ""
    };
    const [ formData, setFormData ] = useState(defaultFormData);
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const { email, password } = formData;
    
    // Hnadle Form
    const handleSignInSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user.user)
        }
        catch(err){
            console.log(err)
        }
    };

    // Handle Google Popout
    // const handleSignInWithGooglePopout = async () => {
    //     try{
    //         const user = await getRedirectResult(auth);
    //         console.log(user)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }


    return(
        <div className="signin-main-container">
            <div className="signin-card-login">
                <h1 className='signin-card-h1'>
                    Login
                </h1>
                <form onSubmit={handleSignInSubmit}>
                    <div className="signin-card-form-container">
                        <span className="signin-card-form-label">Email</span>
                        <input 
                            name='email'
                            type="text"
                            className='signin-card-form-input'
                            onChange={(e) => onChange(e)}
                            value={formData.email}
                        />
                    </div>
                    <div className="signin-card-form-container">
                        <span className="signin-card-form-label">Password</span>
                        <input 
                            name='password'
                            type="password"
                            className='signin-card-form-input'
                            onChange={(e) => onChange(e)}
                            value={password}
                        />
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
                    <div className="signin-card-form-google-popout" >
                        <img 
                            src={googleImage} 
                            alt="googleImage"
                            style={{width: "20px"}}
                        />
                        <button className="signin-card-form-google-button">
                            Sign In With Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

