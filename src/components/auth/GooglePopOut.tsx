import React from 'react';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

import { auth } from '../../firebase/config';
import googleImage from '../../assets/googlepng.png';

// Component
export const GooglePopOut = () => {



  const handleRedirectGoogleAuth = async () => {
    try {
      
      const googleProvider = new GoogleAuthProvider();
      const user = await signInWithRedirect(auth, googleProvider);
      
    } catch (error) {
      alert('Something happen with the server');
    }
  }

  return (
    <div className="google-pop-out-container" onClick={handleRedirectGoogleAuth}>
        <img 
            src={googleImage} 
            alt="googleImage"
            style={{width: "20px", backgroundColor: "white"}}
        />
        <button className="google-pop-out-button">
            Sign In With Google
        </button>
    </div>
  )
}
