import api from "../interceptor.js";

export const USERNAME_UPDATED = "USERNAME_UPDATED";

export const updateProfile = (userProfile) => {
    return (dispatch) => {        
        const token = localStorage.getItem("token");
        const options = {
            headers: {'Authorization': 'Bearer' + token}
          };
        const userName = {
            userName : userProfile.userName
        }
        return api.put("http://localhost:3001/api/v1/user/profile",userName,options)
        .then((res) => {
            console.log(res);
            if (res.status === 200){ 
                dispatch({type:USERNAME_UPDATED, payload : userProfile.userName})                        
            }
        });
    };
};