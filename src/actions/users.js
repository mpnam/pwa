import { USER_FETCH, USER_CLEAR } from './constants';


export function userFetchInformation(username, avatar = "") {
    return {
        type: USER_FETCH,
        username: username,
        avatar: avatar
    };
}

export function userLoggedOut() {
    return {
        type: USER_CLEAR
    };
}