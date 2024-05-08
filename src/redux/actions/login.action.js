import api from "../interceptors/interceptor.js";

export const LOGOUT_REQUESTED = "LOGOUT_REQUESTED";
export const TOKEN_RETREIVED = "TOKEN_RETREIVED";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const userLogin = (userData) => {
  return (dispatch) => {
    // Verification avec login / password
    return api
      .post("http://localhost:3001/api/v1/user/login", userData)
      .then((res) => {
        if (res.status === 200) {
          // Connection OK on stocke le token
          let token = res.data.body.token;
          localStorage.setItem("token", token);
          dispatch({
            type: TOKEN_RETREIVED,
            payload: { token_retreived: true },
          });
        } else {
          console.log("Connexion impossible");
          dispatch({
            type: LOGIN_FAILED,
            payload: { login_failed: true },
          });
        }
      });
  };
};

export const userLogout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_REQUESTED });
  };
};
