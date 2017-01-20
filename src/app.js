import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = (state={}, action) => state;
const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
    dispatch({
       type: 'APP_START'
    });
});
