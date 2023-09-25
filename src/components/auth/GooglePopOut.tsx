import React from 'react'
import googleImage from '../../../public/googlepng.png';

export const GooglePopOut = () => {
  return (
    <div className="google-pop-out-container" >
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
