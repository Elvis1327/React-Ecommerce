import React, { useEffect } from 'react';
import { GoogleAuthProvider, getRedirectResult, onAuthStateChanged, signInWithRedirect,  } from 'firebase/auth';

import { auth } from '../../firebase/config';
import googleImage from '../../assets/googlepng.png';
import { useNavigate } from 'react-router-dom';

export const GooglePopOut = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(user){
            navigate('/');
        }
    })
}, []);

  const handleRedirectGoogleAuth = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {

      const user = await signInWithRedirect(auth, googleProvider);
      const result = await getRedirectResult(auth);

    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div className="google-pop-out-container" onClick={handleRedirectGoogleAuth}>
        <img 
            src={googleImage} 
            alt="googleImage"
            style={{width: "20px"}}
        />
        <button className="google-pop-out-button">
            Sign In With Google
        </button>
    </div>
  )
}
