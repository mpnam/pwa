import { CHANGE_SCREEN } from '../actions/constants';


const initialSate = {
    screen: "Home"
};

export default function users(state = initialSate, action) {
    switch (action.type) {
        case CHANGE_SCREEN:
            return {screen: action.screen};
        default:
            return state;
    }
}

