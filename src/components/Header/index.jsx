import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src="./images/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Header;