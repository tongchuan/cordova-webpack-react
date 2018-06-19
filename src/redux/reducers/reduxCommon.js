import initState from '../initState';
import { common as TYPE} from '../types';
// console.log(initState);
export default function reduxCommon(state = initState.commonState.loading, action) {
  // console.log(state,action);
  switch (action.type) {
    case TYPE.LOADING_SHOW:
      Object.assign(state.loading, {isShow: true});
      break;
    case TYPE.LOADING_HIDE:
      Object.assign(state.loading, {isShow: false});
      break;
    default:
      break;
  }
  return state;
}