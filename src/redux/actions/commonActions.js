import { common as TYPE} from '../types';
export default{
  loadingShow(dispatch) {
    dispatch({
      type: TYPE.LOADING_SHOW
    });
  },
  loadingHide(dispatch) {
    dispatch({
      type: TYPE.LOADING_HIDE
    });
  }
};