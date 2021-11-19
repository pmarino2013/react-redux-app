import React from "react";
import { useNavigate, Link } from "react-router-dom";

import {useDispatch} from 'react-redux'
import {clearAuth} from '../slice/authSlice'

const NavMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const logout = () => {
    localStorage.setItem("user", null);
    dispatch(clearAuth())
    
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand mb-0 h1" to="/">
          WebSite
        </Link>
        {/* <span className="navbar-brand mb-0 h1">WebSite</span> */}
        <div className="btn-group dropstart">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-user-circle" aria-hidden="true"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/perfil">
                Perfil
              </Link>
            </li>
            <li>
              <span className="dropdown-item" onClick={logout}>
                Salir
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
