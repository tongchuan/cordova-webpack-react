import {combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux';
import reduxCommon from './reduxCommon';
import reduxNews from './reduxNews';
// import reduxUser from './reduxUser';
// import reduxMenu from './reduxMenu';
export default combineReducers({
  commonState: reduxCommon,
  newState: reduxNews,
  // userState: reduxUser,
  // menuState: reduxMenu,
  router:routerReducer
});