import api from "../interceptor.js";

export const PROFILE_RETREIVED = "PROFILE_RETREIVED";
export const LOGOUT_REQUESTED = "LOGOUT_REQUESTED";

export const userLogin = (userData) => {

    return (dispatch) => {        
        // Verification avec login / password
        return api.post("http://localhost:3001/api/v1/user/login",userData)
        .then((res) => {
              if (res.status === 200){
                // Connection OK on va recuperer les information de profil pour les passer au userReducer
                let token = res.data.body.token;
                localStorage.setItem("token", token);
                const options = {
                    headers: {'Authorization': 'Bearer' + token}
                  };
                
                // Recuperation des données du user avec le token (api securisée)
                api.post("http://localhost:3001/api/v1/user/profile",null,options)
                .then((profileInfo) => {
                    if (profileInfo.status === 200){
                        dispatch({type:PROFILE_RETREIVED, payload : profileInfo.data.body})                        
                        
                    } else {
                        //console.log("Erreur dans la recuperation des informations de profil")
                    }
                });                                
            } else {
                // Connection KO on reste sur la page de login
            }
           
        });
    };
};

export const userLogout =  () => {
    return(dispatch) => {
        dispatch({type:LOGOUT_REQUESTED})                        
    }
}