import React from 'react'
import InstaConvaLogo from "../img/logo.png"

export default function AuthCard() {
  return (
    <>
      <img src={InstaConvaLogo} alt="logo" className='auth-logo'/>
      <div className='auth-card'>
        <div className="auth-title">ログイン　LogIn</div>
        <div className="auth-input">
          <p>メールアドレス　Email</p>
          <input name="email-input" type="email" placeholder='hello@instatalk.com'/>
        </div>
        <div className="auth-input">
          <p>パスワードPassword</p>
          <input name="password" type="password" placeholder='password' />
        </div>
        <div className='auth-button'>
          <div className="button primary">ログイン　Login</div>
        </div>
      </div>
    </>
  )
}
