import React from "react";
import {Link} from "react-router-dom";
// import "./style.css";
// import logo from "../Nav/4corners_white.png";
import logo from '../logo.svg';
// import API from "../../utils/API"

function Nav(props) {

//   const logout = () => {
//     API.logoutUser()
//       .then(props.changeState("isAuthenticated", false))
// }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <img className="navLogo" src={logo} alt="Logo"/>
  
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/" onClick={logout}>Logout</a>
        </li>  */}
      </ul>
    </nav>
  );
}

export default Nav;