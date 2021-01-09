import { call, put, takeLatest } from 'redux-saga/effects';
import * as contactAPI from '../lib/api/contact';

export const GET_CONTACTS = 'contact/GET_CONTACT' as const;
export const GET_CONTACTS_SUCCESS = 'contact/GET_CONTACT_SUCCESS' as const;
export const GET_CONTACTS_FAILURE = 'contact/GET_CONTACT_FAILURE' as const;

export const getContacts = () => ({
  type: GET_CONTACTS,
});

function* getContactsSaga() {
  try {
    const response = yield call(contactAPI.getContacts);
    yield put({
      type: GET_CONTACTS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: GET_CONTACTS_FAILURE,
      error: e,
    });
  }
}

export function* contactSaga(): Generator {
  yield takeLatest(GET_CONTACTS, getContactsSaga);
}

export type ContactState = {
  contacts: contactAPI.Contact[];
  error: string | null;
};

const initialState: ContactState = {
  contacts: [],
  error: null,
};

type SagaRequest = {
  type: string;
  payload: contactAPI.Contact[];
  error: string;
};

type ContactAction = SagaRequest;

export default function contact(
  state = initialState,
  action: ContactAction,
): ContactState {
  switch (action.type) {
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        error: null,
      };
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        contacts: [],
        error: action.error,
      };
    default:
      return state;
  }
}
