import newsApi from '../api/apiNews';
// import commonActions from './commonActions';
import {news as newsTypes } from '../types';
export default {
  addTodo(data) {
    // return (dispatch, state) => {
    return (dispatch) => {
      // commonActions.loadingShow(dispatch);
      // console.log(state)
      // newsApi.getNewsList(data,dispatch).then(function(data) {
      newsApi.getNewsTest(data).then(function(data) {
        commonActions.loadingHide(dispatch);
        console.log(data);
        dispatch({
          type: 'value',
          data
        });
      },function(err) {
        // commonActions.loadingHide(dispatch);
        console.log(err);
        dispatch({
          type: 'err',
          err
        });
      });
    };
  },
  addTodo2(data) {
    return (dispatch) => {
      newsApi.getNewsList(data).then(function(data) {
        console.log(data);
        dispatch({
          type: 'value',
          data
        });
      },function(err) {
        console.log(err);
        dispatch({
          type: 'err',
          err
        });
      });
    };
  },
  updateRandom(random) {
    return (dispatch, state) => {
      let data = state().newState.list;
      data.map((item) => {
        item.random = random;
        return item;
      });
      // console.log(state());
      dispatch({
        type: newsTypes.NEWS_LIST,
        data
      });
    };
  }
};