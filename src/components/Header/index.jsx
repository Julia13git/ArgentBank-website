import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../redux/actions/login.action";
import { isEmpty } from "../Utils";

function Header() {
  // Donnees du user connecté
  const user = useSelector((state) => state.userReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./images/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        {/* <h1 className="sr-only">Argent Bank</h1> */}
      </Link>

      {!isEmpty(user) && !isEmpty(localStorage.getItem("token")) ? (
        <div className="main-user-header">
          <Link className="main-nav-item" to="/UserPage">
            <i className="fa fa-user-circle"></i>
            {user.userName}
          </Link>
          <Link
            className="main-nav-item"
            to="#"
            onClick={(e) => handleSignOut(e)}
          >
            <i className="fa fa-sign-out"></i>
            Sign out
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/SignIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
