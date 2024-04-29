// Reducer -> Seul element capable de communiquer avec le Store !

import { LOGIN_SUCCESSFULL, LOGOUT_REQUESTED, PROFILE_RETREIVED  } from "../actions/login.action";
import { USERNAME_UPDATED } from "../actions/profile.action";

const initialState = {
};


export default function userReducer(state = initialState, action){
    switch (action.type) {
        case LOGIN_SUCCESSFULL:
            // Quand la connection est OK (login pwd), on alimente le store(userReducer) 
            // avec les données de profil
            return {...state, token: action.payload}
        case PROFILE_RETREIVED:
            return {...state, user : action.payload}
        case USERNAME_UPDATED :
            return {...state, 
                user :{
                    ...state.user,
                    userName : action.payload
                }    
            }           
        case LOGOUT_REQUESTED : 
            return null;
        default:
            return state;
    }
}