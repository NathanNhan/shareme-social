import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { client } from '../client';
const Login = () => {
    const navigate = useNavigate();
    const responseGoogle = (response) => {
        
        localStorage.setItem("user",JSON.stringify(response.profileObj));
        const {name, imageUrl, googleId} = response.profileObj;
        const doc = {
          _id : googleId,
          _type : "user",
          userName : name,
          image : imageUrl
        }
        client.createIfNotExists(doc).then(()=>{
          navigate('/' , {replace : true})
        });
    }
    return (
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-center items-center left-0 top-0 bottom-0 right-0 bg-black">
            <div className="p-5">
              <img src={logo} width="130px" alt="logo" />
            </div>
            <div className="shadow-2xl">
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                render={(renderProps) => (
                  <button
                    type="button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="bg-mainColor justify-center items-center flex outline-none rounded-lg p-3 cursor-pointer"
                  >
                    <FcGoogle className="mr-4"></FcGoogle>Sign in with google
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login