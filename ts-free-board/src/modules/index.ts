import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import contact, { contactSaga } from './contact';

const rootReducer = combineReducers({
  contact,
});

export function* rootSaga() {
  yield all([contactSaga()]);
}

export default rootReducer;
