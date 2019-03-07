import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import App from './index';
import reducer from './reducers'

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);


export default class Bootstrap extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}
