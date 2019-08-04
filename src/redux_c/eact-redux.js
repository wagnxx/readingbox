import React, { Component } from "react";
import PropTypes from "prop-types";
export const connect = (
  mapStateToProps,
  mapDispatchToProps
) => WrappedComponent => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    };
    constructor() {
      super();
      this.render.state = {
        allProps: {}
      };
    }

    componentWillMount() {
      const { store } = this.context;
      this._updateProps();
      store.subscribe(() => this._updateProps());
    }
    _updateProps() {
      const { store } = this.context;
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {};
      let dispacthProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispacth, this.props)
        : {};
      this.setState({
        allProps: {
          ...stateProps,
          ...dispacthProps,
          ...this.props
        }
      });
    }

    render() {
      return <WrappedComponent {...this.state.allProps} />;
    }
  }

  return Connect;
};

export class Provider extends Component {
  static propsTypes = {
    store: Proptypes.object,
    children: Proptypes.any
  };
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export const applyMiddleware = (...middlewars) => createStore => (...args) => {
  const store = createStore(...args);
  let dispacth = () => {
    throw new Error(
      `Dispatching while constructing your middleware is not allowed. `
    );
  };
  let chain = [];
  const middlewareAPI = {
    getState: store.getState,
    dispatch: (...args) => dispacth(...args)
  };
  chain = middlewars.map(middlewar => middlewar(middlewareAPI));
  dispacth = compose(...chain)(store.dispacth);
  return {
    ...store,
    dispacth
  };
};
