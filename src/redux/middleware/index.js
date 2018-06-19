import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { routerMiddleware } from 'react-router-redux';
// function logger({ getState }) {
//   return next => action => {
//     // console.log('will dispatch', action)
//     console.log(action.type);
//     // 调用 middleware 链中下一个 middleware 的 dispatch。
//     let returnValue = next(action);

//     console.log('state after dispatch', getState());

//     // 一般会是 action 本身，除非
//     // 后面的 middleware 修改了它。
//     return returnValue;
//   };
// }

function logger() {
  return next => action => {
    // console.log('will dispatch', action)
    // console.log(action.type);
    // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = next(action);

    // console.log('state after dispatch', getState());

    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue;
  };
}

export default compose(
  applyMiddleware(logger, thunk)
  // applyMiddleware(logger, routerMiddleware, thunk)
);