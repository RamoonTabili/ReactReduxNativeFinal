import React, { Component } from 'react';
import Main from "./components/Main";
import { connect, Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./components/more/reducers";
import thunk from "redux-thunk";

let initialState = {
    restaurantList: [],
    isLoading: false
}

let store = createStore(reducers, initialState, compose(
    applyMiddleware(thunk))
    );


class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <Main />
        </Provider>
    );
  }
}

        
export default App;