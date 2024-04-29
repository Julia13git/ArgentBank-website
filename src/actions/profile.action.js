import axios from "axios"

export const USERNAME_UPDATED = "USERNAME_UPDATED";

export const updateProfile = (userProfile) => {


    return (dispatch) => {        
        // userProfile doit contenir {
        //  "userName": <la nouvelle valeur"
        //}        
        //console.log(userProfile);
        const options = {
            headers: {'Authorization': 'Bearer' + userProfile.token}
          };
        const userName = {
            userName : userProfile.userName
        }
        return axios.put("http://localhost:3001/api/v1/user/profile",userName,options)
        .then((res) => {
            console.log(res);
            if (res.status === 200){ 
                dispatch({type:USERNAME_UPDATED, payload : userProfile.userName})                        
            }
        });
    };
};