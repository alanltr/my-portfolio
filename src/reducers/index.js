import { combineReducers } from 'redux';

import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  // nom du tiroir : reducer qui gère cette partie du state
  home: homeReducer,
});
export default rootReducer;
