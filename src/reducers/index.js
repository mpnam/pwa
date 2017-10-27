import { combineReducers } from 'redux';

import users from './users';
import routes from './routes';


const rootReducer = combineReducers({
    users,
    routes
});

export default rootReducer;