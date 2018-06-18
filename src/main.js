
import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import 'antd-mobile/dist/antd-mobile.css'
import FastClick from 'fastclick'
FastClick.attach(document.body)
import './less/main.less'
import App from './containers/App'
ReactDOM.render(
  <App />,
  document.getElementById('root')
)