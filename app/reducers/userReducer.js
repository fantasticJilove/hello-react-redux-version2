export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_DOB = 'SET_USER_DOB';
export const SET_DATA_FETCHED = 'SET_DATA_FETCHED';

export default function userReducer(state={
    name: '',
    email: '',
    dob: '',
    fetch: false,
}, action){
    switch(action.type){
        case SET_USER_NAME:{
            return {...state,name: action.payload}
        }
        case SET_USER_EMAIL:{
            return {...state,email: action.payload}
        }
        case SET_USER_DOB:{
            return {...state,dob: action.payload}
        }
        case SET_DATA_FETCHED:{
            return {...state,fetch: action.payload}
        }
    }
    return state;
}