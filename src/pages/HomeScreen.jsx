import React from "react";
import {useSelector} from 'react-redux'

const HomeScreen = () => {

const user = useSelector(state => state.auth.user)
// const {name}=user
// console.log(user.name)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Bienvenido {user.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
