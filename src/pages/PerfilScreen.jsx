import React from "react";
import { useSelector } from "react-redux"; //hook para acceder al store

const PerfilScreen = () => {
  const user = useSelector((state) => state.auth.user);  //trayendo la info de auth.user
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="d-flex align-items-center">
            <img className="img-avatar me-2" src={user.imageUrl} alt="avatar" />
            <h3>{user.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilScreen;
