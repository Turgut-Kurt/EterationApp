import * as Actions from './actions';

import {call,  put, takeEvery,} from 'redux-saga/effects';

import {getSimpsonsService} from './service';
import { addSimpsons, deleteSimpsons, setSimpsonsList } from './slice';
import {showMessage} from 'react-native-flash-message';
import { goBack } from '~/utils';

/**
 * get simpsons saga
 * simpsons listesini getir
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* getListSaga() {
  try {
    const response = yield call(getSimpsonsService);
    if (response.status === 200) {
      yield put(setSimpsonsList(response.data));
      // yield delay(500);
    } else {
      yield call(showMessage, {
        message: 'Hata',
        description: 'Bir şeyler ters gitti. getListSaga',
        type: 'danger',
      });
      console.log('else getListSaga  error : ');
    }
  } catch (error) {
    console.log('catch getListSaga error : ' + error);
  }
}



/**
 * delete simpsons saga
 * simpsons listesinden eleman sil
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* deleteSimpsonsSaga({ payload }) {
  try {
    yield put(deleteSimpsons(payload));
    yield call(showMessage, {
      message: 'Başarılı',
      description: 'Silme işlemi başarılı.',
      type: 'success',
    });
  } catch (error) {
    yield call(showMessage, {
      message: 'Hata',
      description: 'Silme işlemi hatalı',
      type: 'danger',
    });
    console.log('catch deleteSimpsonsSaga error : ' + error);
  }
}


/**
 * add simpsons saga
 * simpsons listesine eleman ekle
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* addSimpsonsSaga({payload}) {
  try {
    yield put(addSimpsons(payload));
    yield call(showMessage, {
      message: 'Başarılı',
      description: 'Yeni simpson ekle işlemi başarılı.',
      type: 'success',
    });
    yield call(goBack);
  } catch (error) {
    yield call(showMessage, {
      message: 'Hata',
      description: 'Simpson ekleme başarısız',
      type: 'danger',
    });
    console.log('catch addSimpsonsSaga error : ' + error);
  }
}


export default function* listSaga() {
  yield takeEvery(Actions.getListAction.type, getListSaga);
  yield takeEvery(Actions.deleteSimpsonsAction.type, deleteSimpsonsSaga);
  yield takeEvery(Actions.addSimpsonsAction.type, addSimpsonsSaga);
}
