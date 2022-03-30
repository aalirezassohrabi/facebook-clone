import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth,provider} from "./firebase"
function Login() {

 const signIn =()=>{
  // sign in ...
  auth.signInWithPopup(provider)
  .then(result=>{
    console.log(result);
  }).catch(error => alert(error.message))
 }
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png?20170210095314'
          alt=''
        />
        <img
          src='https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/facebook-logo-official.png?resize=1100%2C750&ssl=1'
          alt=''
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login