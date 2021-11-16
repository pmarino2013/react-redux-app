import React from "react";
import { useNavigate } from "react-router-dom";

import GoogleLogin from "react-google-login";

const LoginScreen = () => {
  let navigate = useNavigate(); //Para redireccionar una vez logueado

  //para obtener los datos de la autenticacion de Google
  const responseGoogle = (response) => {
    console.log(response);
    if (response?.error) {
      console.error(response.error);
    } else {
      localStorage.setItem("user", JSON.stringify(response.profileObj));
      navigate("/");
    }
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3">
          <GoogleLogin
            clientId="877760850378-q81jlodd8ftkpmni94p679p3p8i1v8re.apps.googleusercontent.com"
            buttonText="Inicio de sesión"
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
