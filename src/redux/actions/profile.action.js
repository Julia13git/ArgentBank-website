import api from "../interceptors/interceptor.js";

export const USERNAME_UPDATED = "USERNAME_UPDATED";
export const PROFILE_RETREIVED = "PROFILE_RETREIVED";

export const getProfile = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const options = {
      headers: { Authorization: "Bearer" + token },
    };

    // // Recuperation des données du user avec le token (api securisée)
    api
      .post("http://localhost:3001/api/v1/user/profile", null, options)
      .then((profileInfo) => {
        if (profileInfo.status === 200) {
          dispatch({ type: PROFILE_RETREIVED, payload: profileInfo.data.body });
        } else {
          console.error(
            "Erreur dans la recuperation des informations de profil"
          );
        }
      });
  };
};

export const updateProfile = (userProfile) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const options = {
      headers: { Authorization: "Bearer" + token },
    };
    const userName = {
      userName: userProfile.userName,
    };
    return api
      .put("http://localhost:3001/api/v1/user/profile", userName, options)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: USERNAME_UPDATED, payload: userProfile.userName });
        }
      });
  };
};
