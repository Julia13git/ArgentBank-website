import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./form.css";
import { userLogin } from "../../actions/login.action";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../Utils";

function Form() {
  const form = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Donnees du user connecté
  const user = useSelector((state) => state.userReducer?.user);

  const handleForm = (e) => {
    e.preventDefault();
    const userData = {
      email: form.current[0].value,
      password: form.current[1].value,
    };

    dispatch(userLogin(userData));
  };

  // Quand le user est mis à jour avec le userReducer,
  // React execute la fonction dans useEffect()
  useEffect(() => {
    if (!isEmpty(user)) {
      navigate("/UserPage");
    }
  }, [user]);

  return (
    <form ref={form} onSubmit={(e) => handleForm(e)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
}

export default Form;
