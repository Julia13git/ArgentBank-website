import React, { useEffect } from "react";
import "./header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../redux/actions/login.action";
import { getProfile } from "../../redux/actions/profile.action";
import { isEmpty } from "../Utils";

function Header() {
  // Donnees du user connecté
  const user = useSelector((state) => state.userReducer);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getProfile());
    }
  }, [dispatch, location]);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./images/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
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
