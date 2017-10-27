import { USER_CLEAR, USER_FETCH } from '../actions/constants';


const initialSate = {
    username: "",
    avatar: ""
};

export default function users(state = initialSate, action) {
    switch (action.type) {
        case USER_CLEAR:
            return initialSate;
        case USER_FETCH:
            return { username: action.username, avatar: action.avatar };
        default:
            return state;
    }
}

