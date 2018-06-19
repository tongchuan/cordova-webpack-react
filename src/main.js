
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import store from './redux/store';

import 'babel-polyfill'
import 'antd-mobile/dist/antd-mobile.css'
import FastClick from 'fastclick'
FastClick.attach(document.body)
import './less/main.less'
import Home from './containers/home/Home'
import News from './containers/news/News'
let history = createHashHistory(store);

ReactDOM.render(
  <Provider key='1' store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/news" exact component={News}/>
        </Switch>
      </Router>
    </Provider>,
  document.getElementById('root')
)