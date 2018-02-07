import { SET_USER_NAME, SET_USER_EMAIL, SET_USER_DOB, SET_DATA_FETCHED} from "../reducers/userReducer";

export const setUserName = (name) => {
    return { 
        type: SET_USER_NAME,
        payload: name,
    };
};

export const setUserEmail = (email) => {
    return { 
        type: SET_USER_EMAIL,
        payload: email,
    };
};

export const setUserDob = (dob) => {
    return { 
        type: SET_USER_DOB,
        payload: dob,
    };
};

export const setDataFetched = (fetch) => {
    return { 
        type: SET_DATA_FETCHED,
        payload: fetch,
    };
};
