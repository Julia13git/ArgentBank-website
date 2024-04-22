import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "../../components/Form";
import "./signin.css";

function SignIn() {
  return (
    <>
      <Header />
      <div className="main bg-dark">
        <div className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
