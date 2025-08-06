import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import numReducer from "./NumStates/reducer";

const reducers = combineReducers({
  numReducer
}) 

const composeEnhancers =
  (window as Window & typeof globalThis & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose }).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  reducers, 
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;