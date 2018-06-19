import initState from '../initState';
import { news as TYPE} from '../types';

export default function reduxNews(state = initState.newState, action) {
  switch (action.type) {
    case TYPE.NEWS_ITEM:
      // console.log(action)
      Object.assign(state, action.data);
      break;
    case TYPE.NEWS_LIST:
      Object.assign(state, action.data);
      break;
    default:
      break;
  }
  // console.log(state)
  return state;
}