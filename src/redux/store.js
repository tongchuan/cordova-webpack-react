
import { createStore } from 'redux';
import reducers from './reducers/index';
import middleware from './middleware/index';
import initState from './initState';

export default createStore(reducers, initState, middleware);