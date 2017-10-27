import { USER_FETCH, USER_CLEAR } from './constants';


export function userFetchInformation(username) {
    return {
        type: USER_FETCH,
        username: username
    };
}

export function userLoggedOut() {
    return {
        type: USER_CLEAR
    };
}