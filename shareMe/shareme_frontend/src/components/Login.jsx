import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/assets/share.mp4';
import {jwtDecode} from 'jwt-decode';


import logo from '../assets/assets/logowhite.png';
  

const Login = () => {

  const navigate = useNavigate();

  const responseGoogle = (response) => {
    // Handle Google OAuth response here
    
   console.log(response); // Access user name
   const decodedToken = jwtDecode(response.credential); // Decode the token
    
    console.log(decodedToken);


  

    
  }; 
 



  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width='130px' alt='logo' />
          </div>
          <div className='shadow-2xl'>
            
              <GoogleLogin
                render={(renderProps) => (
                  <button
                    type='button'
                    className='bg-mainColour flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle className='mr-4' />
                    Sign in with Google
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy='single_host_origin'
              />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
