import React from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import newsActions from '../../redux/actions/newsActions';

@connect((state, ownProps)=>{
  return { newState: state.newState };
},(dispatch) => {
  return {action: bindActionCreators(newsActions, dispatch)};
},(stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}, {
  pure: false,
  withRef: false
})
export default class Home extends React.Component{
  constructor(props){
    super(props)
    console.log(this)
  }
  componentDidMount(){
    this.props.action.addTodo()
  }
  render(){
    return (
      <div>
        Home
      </div>
    )
  }
}