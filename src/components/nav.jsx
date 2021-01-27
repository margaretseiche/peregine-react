import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";
import logo from '../logo.svg';
// import API from "../../utils/API"

function Nav(props) {

  //   const logout = () => {
  //     API.logoutUser()
  //       .then(props.changeState("isAuthenticated", false))
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <img className="navLogo" src={logo} alt="Logo" />

      <div className="ui container">

        <ul className="nav nav-tabs">

          <li className="nav-item">
            <button className="ui left floated inverted button">
              <Link className="nav-link item" to="/">Home</Link>
            </button>
          </li>

          <li className="nav-item">
            <button className="ui right floated inverted button">
              <Link className="nav-link" to="/login">Login</Link>
            </button>
          </li>

          <li className="nav-item">
            <button className="ui right floated inverted button">
              <Link className="nav-link" to="/signup">Sign up</Link>
            </button>
          </li>

          {/* <li className="nav-item">
          <a className="nav-link" href="/" onClick={logout}>Logout</a>
        </li>  */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;