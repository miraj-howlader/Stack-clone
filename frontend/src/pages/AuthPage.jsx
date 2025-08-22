import { SignInButton } from '@clerk/clerk-react'
import '../styles/auth.css'

import React from 'react'

const AuthPage = () => {
  return (
    <div className='auth-container'>
      <div className='auth-left'>
        <div className='auth-hero'>
         <div className='brand-container'>
          <img src="/logo.png" alt=""  className='brand-logo'/>
          <span className='brand-name'>Slap</span>
         </div>
          <h1>Where Work Happens ✨</h1>
          <p className='hero-subtitle'>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita tempora nemo eaque! sit amet consectetur adipisicing elit.</p>
        
        <div className='features-list'>
          <div className='feature-item'>
           <span className='feature-icon'>💬</span>
           <span>Real-time messaging</span>
          </div>
          <div className='feature-item'>
           <span className='feature-icon'>🎮</span>
           <span>Video & metting</span>
          </div>
          <div className='feature-item'>
           <span className='feature-icon'>🔒</span>
           <span>Secure & private</span>
          </div>
        </div>
        <SignInButton mode='modal'>
          <button className='cta-button'>
            Get Started with Slap
            <span className='button-arrow'>👉</span>
          </button>
        </SignInButton>
        </div>

      </div>

      <div className="auth-right">
        <div className='auth-image-container'>
          <img src="auth-i.png" alt="" 
          className='auth-image'/>
          <div className='image-overlay'></div>

        </div>
      </div>

    </div >
  )
}

export default AuthPage