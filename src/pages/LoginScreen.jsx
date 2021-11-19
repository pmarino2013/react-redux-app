import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Para usar reducer
import {useDispatch} from 'react-redux'
import {addAuth} from '../slice/authSlice'

import GoogleLogin from "react-google-login";

const LoginScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  
  useEffect(() => {
  
    const user = JSON.parse(localStorage.getItem('user')) || null
    if(user){
      navigate('/')
    }


  }, [navigate])


  const responseGoogle = (response) => {
    console.log(response);

    if (response?.error) {
      console.log(response.error);
    } else {
      const { email, name, imageUrl, googleId } = response.profileObj;

      const user = {
        email,
        name,
        imageUrl,
        googleId,
      };

      localStorage.setItem("user", JSON.stringify(user));
      dispatch(addAuth(user))
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <GoogleLogin
            clientId="877760850378-q81jlodd8ftkpmni94p679p3p8i1v8re.apps.googleusercontent.com"
            buttonText="Iniciar sesión con Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
