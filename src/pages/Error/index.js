import React, { Component } from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import pureRender from 'pureRender-mj';
import classNames from 'classnames';
import './error.scss';

@pureRender()
class Error extends Component {
  static propTypes = {
    className:PropTypes.string
  }
  static defaultProps = {}
  static contextTypes = {}
  constructor(props){
    super(props);
    autoBind(this);
  }
  getChildContext(){}
  componentWillMount(){}
  componentDidMount(){}
  componentWillReceiveProps(){}
  //shouldComponentUpdate(){}
  componentWillUpdate(){}
  componentDidUpdate(){}
  componentWillUnmount(){}
  render() {
    const {className} = this.props;
    const wrapCls = classNames('error-wrap',className);
    return (
      <div className={wrapCls}>
        error text
      </div>
    )
  }
}

export default Error;