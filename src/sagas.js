import {all} from 'redux-saga/effects';
import listSaga from './modules/simpsons/saga';
/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([listSaga()]);
}
