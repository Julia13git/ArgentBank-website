import { LOGOUT_REQUESTED, PROFILE_RETREIVED  } from "../actions/login.action";
import { USERNAME_UPDATED } from "../actions/profile.action";

const initialState = {
};


export default function userReducer(state = initialState, action){
    switch (action.type) {
        case PROFILE_RETREIVED:
            return action.payload;
        case USERNAME_UPDATED :
            return {...state, userName : action.payload }           
        case LOGOUT_REQUESTED : 
            localStorage.clear();
            return null;
        default:
            return state;
    }
}