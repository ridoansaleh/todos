import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


/* Notes 

  1. Provider : the higher-order component provided by React Redux that lets you bind Redux to React.
  2. store    : is an object that brings actions and reducers together.
     store has responsibilities : 
      > Holds application state;
      > Allows access to state via getState();
      > Allows state to be updated via dispatch(action);
      > Registers listeners via subscribe(listener);
      > Handles unregistering of listeners via the function returned by subscribe(listener)


*/