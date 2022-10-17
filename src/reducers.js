import {combineReducers} from 'redux';
import simpsonsReducer from './modules/simpsons/slice';
/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const appReducer = combineReducers({
  simpsons: simpsonsReducer,
});

const rootReducers = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    console.log('USER_LOGOUT girdim');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducers;
