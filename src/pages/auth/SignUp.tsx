import React, { ChangeEvent, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/config';

import googleImage from '../../../public/googlepng.png';

export const SignUp = () => {

    const [ formDataValues, setFormDataValues ] = useState({
        email: "", password: ''
    });
    const { email, password } = formDataValues;
    // Handle InputS Change
    const handleInputChange = (e:ChangeEvent<HTMLInputElement> ) => {
        setFormDataValues({
            ...formDataValues,
            [e.target.name]: e.target.value
        });
    };


    // HandleForm
    const handleOnSubmit = async (e: any) => {
        e.preventDefault();

        // Handle create acount with firebase
        try{

            const newUser = await createUserWithEmailAndPassword(auth, email, password);
            console.log("register", newUser.user)

        }catch(err){
            console.log(err)
        }

    }

    return(
        <div className="signup-main-container">
            <div className="signup-card-register">
                <h1 className="signup-card-h1">
                    Register
                </h1>
                <form onSubmit={handleOnSubmit}>
                    <div className="signup-card-form-container">
                        <span className="signup-card-form-label">Name</span>
                        <input 
                            type="text" 
                            name='name'
                            className='signup-card-form-input'
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="signup-card-form-container">
                        <span className="signup-card-form-label">Email</span>
                        <input 
                            type="text" 
                            name='email'
                            className='signup-card-form-input'
                            value={email}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="signup-card-form-container">
                        <span className="signup-card-form-label">Password</span>
                        <input 
                            type="text" 
                            name='password'
                            className='signup-card-form-input'
                            value={password}
                            onChange={(e) => handleInputChange(e)}
                        />
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
                    <div className="signin-card-form-google-popout">
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


