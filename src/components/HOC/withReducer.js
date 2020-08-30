import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { connect } from "react-redux";
export function withReducer(mapStateToProps, mapDispatchToProps, reducer) {
  return function (UserComponent) {
    return class extends React.Component {
      render() {
        const store = createStore(reducer, applyMiddleware(thunk));
        let Mycomp = connect(
          mapStateToProps,
          mapDispatchToProps
        )(UserComponent);
        return (
          <Provider store={store}>
            <Mycomp />
          </Provider>
        );
      }
    };
  };
}
